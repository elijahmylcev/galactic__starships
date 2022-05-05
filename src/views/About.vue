<template>
  <div class="about">

        <img class="img" :src="item.adress" />

        <ul class="listStarshipsDetails"
        >
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
import Swapi from '../services/swapi-service';

const _service = new Swapi();

export default {
  data() {
    return {
      id: 5,
      item: {},
    };
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
.img {
  width: 70%;
  display: block;
  margin: 0 auto;
}

.listStarshipsDetails {
  width: 60%;
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
