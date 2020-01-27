<template>
<div>
  <div id="bc">
    <img class="logo" alt="Vue logo" src="../assets/OYO.png" width=100px > 
    <br/>
    <input type="text" required placeholder="Enter Technician_id" id="a1"  onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;">
    <!-- <button class="btn">Submit</button> -->
    <input type="button" class="button button1" value="Submit" v-on:click="gettechid"  >
    <br/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <getList v-bind:techid="techid" /> -->
  </div>

<!-- {{techid}} -->
  <a-table
    :columns="columns"
    :dataSource="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  >
     <template slot="Action" slot-scope="text,record" >
       <a-button type="primary" @click="onTaskClick(record.task_id)">Show Full Description</a-button>
        <!-- <a href="/technician/tasklist/desc/{{this.data[record.key].task_id}}">Delete</a> -->
      </template>
  </a-table>

  </div>
</template>


<script>
import axios from 'axios';
  const columns = [
    {
      title: 'Task_id',
      dataIndex: 'task_id',
      width: 150,
    },
    {
      title: 'Subcategory_id',
      dataIndex: 'subcategory_id',
      width: 150,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width:150,
    },
    {
      title: 'Created_at',
      dataIndex: 'created_at',
      width:150,
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      scopedSlots: { customRender: 'Action' },
      width:150,
    },
  ];
  
// //   for (let i = 0; i < 100; i++) {
// //     data.push({
// //       key: i,
// //       task_id: `${i}`,
// //       subcategory_id: 32,
// //       status: `London, Park Lane no. ${i}`,
// //       created_at:'2020-02-02',
// //     });
// //   }
  export default {
    // props: ["techid"],
    name:"getList",
    data() {
      return {
        data:null,
        columns,
        techid:0,
      };
    },
    methods:{
        gettechid(){
          this.techid = document.getElementById("a1").value;
             axios
            .get(`http://localhost:8000/api/task/${this.techid}`)
            .then(response => (this.data =response.data))
      },
      onTaskClick(tid){
        /* eslint-disable*/
      
        window.location='/technician/tasklist/desc/'+ this.techid + '/'+tid;
      }
    }
     
    
};
 
</script>

<style scoped>
    #bc {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-bottom: 60px;
      margin-left:15vw;
      margin-right:20vw;
      margin-top:-10vh;
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
      margin-left:5vw;
      width:10vw;
      height:5vh;
    }
    .button1:hover {
      background-color: #4CAF50;
      color: white;
    }
    #a1{
      width:20vw;
      height:5vh;
    }
    .logo{
      margin-left:42vh;
      margin-right:37vh;
      height:25vh;
      width:25vh;
    }
</style>