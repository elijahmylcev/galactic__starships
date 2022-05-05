<template>
  <div style="height: content">
    <ul class="item-list list-group">
      <li
        v-for="item in items"
        :key="item.id"
        class="list-group-item"
      >
        <router-link to="/about">{{ item[namingProperty] }}</router-link>
      </li>
    </ul>
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
    // loading: {
    //   type: Boolean,
    //   required: true,
    // },
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
