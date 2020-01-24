<template>
  <div id="app">
    <Taskdescription />
  </div>
  
</template>

<script>
import Taskdescription from './components/Taskdescription.vue'

export default {
  name: 'app',
  components: {
    Taskdescription
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
