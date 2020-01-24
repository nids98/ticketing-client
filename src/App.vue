<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/OYO.png" width=100px>
    <br/>
    <input type="text" required value="Enter Technician_id">
    <!-- <button class="btn">Submit</button> -->
    <input type="button" class="button button1" value="Submit">
    <br/>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <getList/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import getList from './components/getList.vue'
export default {
  name: 'app',
  components: {
    getList
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  /* padding: 16px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

</style>
