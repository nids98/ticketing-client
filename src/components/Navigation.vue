<template>
  <div>
    <img src="../assets/oyologo.png" width=200px>
    <h2>Welcome to OYO </h2>
    <l1> World's second largest chain of hotels and homes </l1>
    <br/>
    <br/>
      
      <router-link class="spacing" v-for="routes in links " 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>

</div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        /*{
          id: 0,
          text: 'Hello World',
          page:'/HelloWorld'
        },*/
        {
          id: 1,
          text: 'View Tasks',
          page:'/technician/tasklist'
        },
        {
          id: 2,
          text: 'Raise a ticket',
          page:'/Raise a ticket'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>

<style>
.spacing {
  margin-right: 40px;
  margin-inline-start: 20px;

  
}
</style>