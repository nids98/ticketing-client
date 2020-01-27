<template>
  <div class="alert alert-success" role="alert">
    &nbsp; &nbsp; Ticket Raised successfully
    <img
      src
      style="display:none;"
      onerror="(function(el){ setTimeout(function(){ el.parentNode.parentNode.removeChild(el.parentNode); },10000 ); })(this);"
    />
  </div>
</template>
<script>
export default {
  name: "AlertSuccess"
};
</script>
<style scoped>
</style>