<template>
  <div class="home">
    <h1>Starships</h1>
    <search v-model="searchQuery"/>
    <StarshipsList
      :items="SearchedList"
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
import Search from '../components/Search.vue';

const _service = new Swapi();

export default {
  name: 'List',

  components: {
    StarshipsList,
    Search,
  },

  data: () => ({
    page: 1,
    starships: {
      value: [],
    },

    searchQuery: '',
  }),

  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },

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

  computed: {
    SearchedList() {
      if (this.searchQuery !== '') {
        return this.starships.value.filter((starship) => starship.name.toLowerCase()
          .includes(this.searchQuery.toLowerCase()));
      }
      return this.starships.value;
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
.input {
  width: 70%;
  padding: 10px 15px;
  font-size: 20px;
  margin: 0 auto;
  color: #c78f22;
  border: none;
}
</style>
