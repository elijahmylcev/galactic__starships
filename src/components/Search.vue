<template>
  <input type="text" class="input" :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  name: 'search',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.input {
  display: block;
  margin: 10px auto 0 auto;
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>
