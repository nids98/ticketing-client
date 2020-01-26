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
            <b-nav-item href="/raise-a-ticket">Raise a Ticket</b-nav-item>
            <b-nav-item href="#">View Taks</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped></style>