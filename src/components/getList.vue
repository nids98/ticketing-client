<template>
  <a-table
    :columns="columns"
    :dataSource="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
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

  ];

  const data = [];
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
    data() {
      return {
        data,
        columns,
      };
    },
    mounted(){
     axios
     .get('http://127.0.0.1:8003/api/task/4')
     .then(response => (this.data =response))
     }
    
};
 

</script>
