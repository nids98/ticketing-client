<template>
  <div>
    <Navbar />
    <div id="bc">
      <img class="logo" alt="Vue logo" src="../assets/OYO.png" width="100px" />
      <br />
      <input
        type="text"
        required
        ref="tech_id_input"
        placeholder="Enter Technician_id"
        id="a1"
        onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
      />
      <!-- <button class="btn">Submit</button> -->
      <input
        type="button"
        class="button button1"
        value="Submit"
        v-on:click="gettechid"
        id="submit_button"
      />
      <br />
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
      <template slot="Action" slot-scope="text,record">
        <a-button
          type="primary"
          class="actionbutton"
          @click="onTaskClick(record.task_id)"
        >Show Full Description</a-button>
        <!-- <a href="/technician/tasklist/desc/{{this.data[record.key].task_id}}">Delete</a> -->
      </template>
    </a-table>
  </div>
</template>


<script>
import axios from "axios";
import Navbar from "./Dashboard/Navbar";
const columns = [
  {
    title: "Task_id",
    dataIndex: "task_id",
    width: 150
  },
  {
    title: "Subcategory_id",
    dataIndex: "subcategory_id",
    width: 150
  },
  {
    title: "Status",
    dataIndex: "status",
    width: 150
  },
  {
    title: "Created_at",
    dataIndex: "created_at",
    width: 150
  },
  {
    title: "Action",
    dataIndex: "Action",
    scopedSlots: { customRender: "Action" },
    width: 150
  }
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
  name: "getList",
  components: { Navbar },
  data() {
    return {
      data: null,
      columns,
      techid: 0
    };
  },
  mounted() {
    document.getElementById("a1").addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("submit_button").click();
      }
    });

    this.techid = this.$route.query.tech_id;
    /*eslint-disable*/
    console.log(this.$route.params);
    if (this.techid != null) {
      const params ={
        tech_id:this.techid
      };
      axios
        .get(`/api/task`, {
          params,
          headers: { "x-auth-token": "nidhi" }
        })
        .then(response => {
          /*eslint-disable*/
          //console.log(response.data.error !== undefined);
          if (response.data.error !== undefined) {
            window.location = "/401";
          } else {
            this.data = response.data;
          }
        });
      this.$refs.tech_id_input.value = this.techid;
      /* eslint-disable*/
      // console.log("fdgdgdfg")
      // console.log(this.$refs.tech_id_input.value);
      // console.log(this.$route.params.tech_id);
    }
  },
  methods: {
    gettechid() {
      this.techid = document.getElementById("a1").value;
      window.location = "/task?tech_id=" + this.techid;
      // axios
      //   .get(`http://localhost:8000/api/task/${this.techid}`)
      //   .then(response => (this.data = response.data));
    },
    onTaskClick(tid) {
      /* eslint-disable*/

      window.location = "/task/" + tid;
    }
  }
};
</script>

<style scoped>
#bc {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 60px;
  margin-left: 15vw;
  margin-right: 20vw;
  /* margin-top: -10vh; */
}
.button {
  background-color: #4caf50; /* Green */
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
  border: 2px solid #4caf50;
  margin-left: 5vw;
  width: 10vw;
  height: 5vh;
}

.button1:hover {
  background-color: #4caf50;
  color: white;
}

#a1 {
  width: 20vw;
  height: 5vh;
}

.logo {
  margin-left: 42vh;
  margin-right: 37vh;
  height: 25vh;
  width: 25vh;
}
.actionbutton,
.actionbutton:hover {
  background-color: red;
  border: 1px solid red;
}
</style>