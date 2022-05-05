<template>
  <div class="home">
    <h1 style="color: white">Starships</h1>
    <StarshipsList
          :items="starships.value"
          namingProperty="name"
          class="list"
    />

    <div class="button__wrapper">
      <button type="button" class="btn btn-outline-light"> prev </button>
    <button type="button" class="btn btn-outline-light"> next </button>
    </div>
  </div>
</template>

<script>
import StarshipsList from '@/components/StarshipsList.vue';
import Swapi from '../services/swapi-service';

const _service = new Swapi();

export default {
  name: 'Home',

  components: {
    StarshipsList,
  },

  data: () => ({
    starships: {
      value: [],
      loading: true,
    },

    selectedStarship: {
      value: {},
      loading: true,
    },
  }),

  async mounted() {
    const starships = await _service.getAllStarships(3);
    this.starships.value = [...starships];
    this.starships.loading = false;
  },

};
</script>

<style lang="scss" scoped>
  .button__wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
</style>
