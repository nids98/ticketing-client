<template>
  <div>
    <Navbar />
    <div class="center">
      <!-- <÷img src="../assets/pagenotfound.gif" alt="page not found" id="error" /> -->
      <h2>Error 401: Not authorized</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Not"
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
h2 {
  margin: 50px 0;
  color: red;
  text-transform: uppercase;
}
#error {
  margin-top: 100px;
}
</style>