
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
            <h5>Hello &nbsp;&nbsp;&nbsp; {{this.tech_name}}</h5>
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
                <h5>
            Task ID : {{this.task_id}}
                </h5>
            </div>
         </div>
    </div>

    <table class="table table-bordered">
        <tbody>
            <tr>
                <td style="width: 5%">Task type</td>
                <td style="width: 20%">{{this.task_type}}</td>
            </tr>
            <tr>
                <td > Description</td>
                <td class="desc" > {{this.desc}} </td>
            </tr>
            <tr>
                <td>Task creation date</td>
                <td>{{this.created_at}}</td>
            </tr>
            <tr>
                <td>{{this.update_name}}</td>
                <td>{{this.updated_at}}</td>
            </tr>
             <tr>
                <td>Status</td>
                <td>{{this.status}}</td>
            </tr>
        </tbody>
    </table>

    <button @click="updateStatus" type="button" class="btn btn-primary btn-lg btn-block"  > {{(this.button_name)}}  </button>

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
            update_name:'',
            button_name:'',
            tech_id:'',
            task_id:'',
            tech_name:'',
        };
    },
    methods:{
    
        async updateStatus(){
            try
            { 
                /* eslint-disable */
                await axios.put(`http://localhost:8000/api/update/${this.task_id}`);
                const res = await axios.get(`http://localhost:8000/api/task/desc/${this.tech_id}}/${this.task_id}`);
                 
                this.status=res.data[0].status;
                this.updated_at=res.data[0].updated_at;
        
                this.updated_at=this.updated_at.split(" ")[0];

                if(this.status==='assigned')
                { this.update_name='Assigned on'; this.button_name='Mark as Started'; }
                else if(this.status==='start')
                {  this.update_name='Started on'; this.button_name='Mark as Completed'; }
                else
                {  this.update_name='Completed on';  this.button_name='Already Completed'; }

            }
            catch(e)
            {
                //kdjsbv
            }
        },

    },
    async created(){
        /* eslint-disable */

        try{
            
            /* eslint-disable */
            let uri = window.location.href.split('/');
            this.tech_id=uri[uri.length-2];
            this.task_id=uri[uri.length-1];

            const res = await axios.get(`http://localhost:8000/api/task/desc/${this.tech_id}}/${this.task_id}`);

            console.log(this.tech_id,this.task_id);

            this.task_type=res.data[0].cat_name
            ;
            this.desc=res.data[0].desc;
            this.status=res.data[0].status;
            this.updated_at=res.data[0].updated_at;
            this.created_at=res.data[0].created_at;
            this.tech_name=res.data[0].tech_name;

            this.updated_at=this.updated_at.split(" ")[0];
            this.created_at=this.created_at.split(" ")[0];

            if(this.status==='assigned')
            { this.update_name='Assigned on'; this.button_name='Mark as Started'; }
            else if(this.status==='start')
            {  this.update_name='Started on'; this.button_name='Mark as Completed'; }
            else
            {  this.update_name='Completed on';  this.button_name='Already Completed'; }

            //alert(this.button_name);

        }
        catch(e){
            //console.log(e);
        }
    },
    
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
        text-align: 'center';
        /* text-align: justify;  */
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