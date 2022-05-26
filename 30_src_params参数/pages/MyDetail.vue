<template>
  <ul>
      <li>消息编号：{{$route.params.id}}</li>
      <li>消息标题：{{$route.qarams.title}}</li>
  </ul>
</template>

<script>
  export default {
    name:'MyDeatail',
    mounted(){
      console.log(this.$route)  
    }
  }
</script>

<style>

</style>