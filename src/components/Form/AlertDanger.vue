<template>
  <div v-if="errors.length">
    <div v-for="error in errors" v-bind:key="error" class="alert alert-danger">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "AlertDanger",
  props: ["errors"]
};
</script>

<style scoped>
</style>