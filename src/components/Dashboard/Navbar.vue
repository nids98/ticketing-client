<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand href="/">
        <img
          src="../../assets/navlogo.jpg"
          class="d-inline-block align-top"
          width="30px"
          height="30px"
          alt="Kitten"
        />
        Ticketing
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/raise-a-ticket" v-bind:class="{ active: isForm }">Raise a Ticket</b-nav-item>
            <b-nav-item href="/view-tasks" v-bind:class="{ active: isTask }">View Taks</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isForm: this.$route.path === "/raise-a-ticket",
      isTask:
        this.$route.path === "/view-tasks" ||
        this.$route.path === "/view-tasks.+"
    };
  }
};
</script>

<style scoped>
a.nav-link:hover {
  background-color: rgb(197, 5, 5);
  color: red;
  border-radius: 20px;
}
</style>