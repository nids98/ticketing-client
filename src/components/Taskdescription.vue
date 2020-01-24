
<template>
<div>
    <div>
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Hello Arshdeep</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" >Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
              <b-nav-item href="#">Employee ID 5</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    
    
    <div class="container">
        <div class="row">
            <div class="col col-lg-2">
            <h5>Hello &nbsp;&nbsp;&nbsp; Arshdeep</h5>
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
                <h5>
            Task ID : 264
                </h5>
            </div>
         </div>
    </div>

    <table class="table table-bordered">
        <tbody>
            <tr>
                <td style="width: 5%">Task type</td>
                <td style="width: 20%">Larry the Bird</td>
            </tr>
            <tr>
                <td > Description</td>
                <td class="desc" >  Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird v Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird Larry the Bird </td>
            </tr>
            <tr>
                <td>Task creation date</td>
                <td>{{this.task_type}}</td>
            </tr>
            <tr>
                <td>Started task on</td>
                <td>Larry the Bird</td>
            </tr>
             <tr>
                <td>Status</td>
                <td>Larry the Bird</td>
            </tr>
        </tbody>
    </table>

    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>

</div>
    
</template>

<script>
import axios from 'axios';

export default {
    name: "Taskdescription",
    data(){
        return{
            task_type:'',
            desc:'',
            status:'',
            created_at:'',
            updated_at:'',
            update_name:''
        };
    },
    async created(){
        try{
            const res = await axios.get('http://localhost:8000/api/task/desc/1/2');
            alert(res);
            this.task_type=res[0].cat_name;
            this.desc=res[0].desc;
            this.status=res[0].status;
            this.updated_at=res[0].updated_at;
        }
        catch(e){
            //console.log(e);
        }
    }
}
</script>

<style scoped>

    .btn.btn-primary.btn-lg.btn-block{
        margin-top: 10vh;
        width:40vw;
        margin-left:30vw;
        margin-right: 30vw; 
    }

    .desc{
        word-wrap: break-word; 
        text-align: justify;
    }

    .container{
    font-family: 'Lato', 'sans-serif';
    margin-top: 15vh;
    }

    .table.table-bordered{
        font-family: 'Lato', 'sans-serif';
        margin-top: 10vh;
        margin-left: 15vw;
        margin-right:15vw;
        width:70vw;
        border-radius: 30px;
    }

    
    

</style>