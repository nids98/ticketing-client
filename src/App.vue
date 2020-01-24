<template>
  <div id="app">
    <img src="./assets/oyologo.png" width=200px>
    <router-view> </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
body, html {
  height: 100%;
}
body {
 background-image: url("./assets/prick.gif");
 background-color: #cccccc;
 height: 100%;
 background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
