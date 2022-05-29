<template>
  <div class="home">
    <h1>Starships</h1>
    <search v-model="searchQuery"/>
    <button @click="SearchedList">Search...</button>
    <StarshipsList
      :items="starships.value"
      namingProperty="name"
      class="list"
    />

    <div class="button__wrapper">
      <button type="button" v-if="page !== 1"
      class="btn btn-outline-light" @click="onPrev"> prev </button>
      <button type="button" v-if="starships.value.length == 10"
       class="btn btn-outline-light" @click="onNext"> next </button>
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

  async mounted() {
    const starships = await _service.getStarshipsOnCurrentPage(this.page);
    this.starships.value = [...starships];
  },

  methods: {
    async onNext() {
      if (this.page <= 3) {
        this.page += 1;
        const starships = await _service.getStarshipsOnCurrentPage(this.page);
        this.starships.value = [...starships];
      }
    },
    async onPrev() {
      if (this.page >= 2 && this.page <= 4) {
        this.page -= 1;
        const starships = await _service.getStarshipsOnCurrentPage(this.page);
        this.starships.value = [...starships];
      }
    },
    async SearchedList() {
      if (this.searchQuery !== '') {
        const starships = await _service.findStarshipsByName(this.searchQuery);
        this.starships.value = [...starships];
        this.page = null;
        console.log(this.starships.value, this.page);
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
