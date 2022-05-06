<template>
  <div class="about">
    <div class="about__image">
      <ErrorIndicator v-if="item.hasBrokenImage" />
      <img v-else  class="img" :src="item.adress" />
    </div>

    <ul class="listStarshipsDetails">
      <li class="listStarshipsDetails__item"
      v-for="(value, name) in item"
      :key="value">
        <span>{{ name }}:</span>
        <span>{{ value }}</span>
      </li>
    </ul>

  </div>
</template>

<script>
import ErrorIndicator from '@/components/ErrorIndicator.vue';
import Swapi from '../services/swapi-service';

const _service = new Swapi();

export default {
  data() {
    return {
      id: this.$route.query.id,
      item: {},
    };
  },

  components: {
    ErrorIndicator,
  },

  async mounted() {
    const starship = await _service.getStarship(this.id);
    console.log(starship);
    const result = await fetch(starship.adress);
    if (!result.ok) {
      starship.hasBrokenImage = true;
    } else {
      starship.hasBrokenImage = false;
    }
    this.item = starship;
  },

};
</script>

<style lang="scss" scoped>
.about {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  &__image {
    width: 40%;
    display: block;
    margin: 0 auto;
  }
}

.listStarshipsDetails {
  width: 35%;
  padding: 15px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  color: #42b983;
  &__item {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    gap: 30px;
    border-bottom: 1px solid #42b983;
    span {
      display: block;
    }
  }
}
</style>
