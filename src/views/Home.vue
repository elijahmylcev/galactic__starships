<template>
  <div class="home">
    <h1 style="color: white">Starships</h1>
    <StarshipsList
          :items="starships.value"
          namingProperty="name"
          class="list"
    />

    <div class="button__wrapper">
      <button type="button" class="btn btn-outline-light" @click="onPrev"> prev </button>
      <button type="button" class="btn btn-outline-light" @click="onNext"> next </button>
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
    page: 1,
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
    const starships = await _service.getAllStarships(this.page);
    this.starships.value = [...starships];
    this.starships.loading = false;
  },

  methods: {
    async onNext() {
      if (this.page <= 3) {
        this.page += 1;
        const starships = await _service.getAllStarships(this.page);
        this.starships.value = [...starships];
      }
    },
    async onPrev() {
      if (this.page >= 2 && this.page <= 4) {
        this.page -= 1;
        const starships = await _service.getAllStarships(this.page);
        this.starships.value = [...starships];
      }
    },
  },

};
</script>

<style lang="scss" scoped>
  .button__wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
    button {
      padding: 8px 20px;
    }
  }
</style>
