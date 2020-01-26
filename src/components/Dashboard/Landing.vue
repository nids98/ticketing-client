<template>
  <div>
    <Navbar />
    <div class="center">
      <img src="../../assets/dashboard.gif" alt="dashboard" />
      <h2 class="center">Welcome to Ticketing</h2>
      <p class="center">User complaint registration and workforce management system</p>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "Landing",
  components: {
    Navbar
  }
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
}
p {
  font-size: 20px;
}
</style>