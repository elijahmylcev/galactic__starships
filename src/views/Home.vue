<template>
  <div class="home">
    <StarshipsList
          :items="starships.value"
          namingProperty="name"
          class="list"
        />
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
