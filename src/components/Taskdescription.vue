
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
            button_name:''
        };
    },
    methods:{
    
        async update_var()
        {
            try{
                const res = await axios.get('http://localhost:8000/api/task/desc/1/1');
                /* eslint-disable */
                this.task_type=res.data[0].cat_name;
                this.desc=res.data[0].desc;
                this.status=res.data[0].status;
                this.updated_at=res.data[0].updated_at;
                this.created_at=res.data[0].created_at;

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

            return;

        },
        async updateStatus(){
            try
            { 
                /* eslint-disable */
                //axios.put('http://localhost:8000/api/update/4').then((res) => console.log(res));
                await axios.put('http://localhost:8000/api/update/2');
                const res = await axios.get('http://localhost:8000/api/task/desc/1/2');
                /* eslint-disable */
                this.task_type=res.data[0].cat_name;
                this.desc=res.data[0].desc;
                this.status=res.data[0].status;
                this.updated_at=res.data[0].updated_at;
                this.created_at=res.data[0].created_at;

                this.updated_at=this.updated_at.split(" ")[0];
                this.created_at=this.created_at.split(" ")[0];

                if(this.status==='assigned')
                { this.update_name='Assigned on'; this.button_name='Mark as Started'; }
                else if(this.status==='start')
                {  this.update_name='Started on'; this.button_name='Mark as Completed'; }
                else
                {  this.update_name='Completed on';  this.button_name='Already Completed'; }

                //alert(this.button_name);
                //update_var(); 
            }
            catch(e)
            {
                //kdjsbv
            }
        },

    },
    async created(){
        try{
            const res = await axios.get('http://localhost:8000/api/task/desc/4/2');
            /* eslint-disable */
            this.task_type=res.data[0].cat_name;
            this.desc=res.data[0].desc;
            this.status=res.data[0].status;
            this.updated_at=res.data[0].updated_at;
            this.created_at=res.data[0].created_at;

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