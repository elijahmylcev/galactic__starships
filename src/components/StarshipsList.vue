<template>
  <div style="height: content" class="item-list list-group">
    <router-link
    v-for="item in items"
    :key="item.id"
    class="list-group-item"
    :to=" { path: '/about/', query: {id: item.id} } " >
      {{ item[namingProperty] }}
    </router-link>
  </div>

</template>

<script>

export default {
  name: 'List',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    namingProperty: {
      type: String,
      default: 'name',
    },
  },

  // methods: {
  //   onItemSelected(item) {
  //     this.$emit("on-item-click", item.id);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.item-list {
  margin-bottom: 1rem;
}

.item-list .list-group-item {
  cursor: pointer;
  font-size: 1.3rem;
}

.item-list .list-group-item:hover {
  background-color: #444;
  color: #00bc8c;
}
</style>
