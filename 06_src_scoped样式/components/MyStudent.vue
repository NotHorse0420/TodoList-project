<template>
    <div class="student">
        <h2>{{name}}</h2>
        <h2>{{sex}}</h2>
    </div>
</template>

<script>
    export default{
        name:'MyStudent',
       data(){
           return{
               name:'A',
               sex:'male'
           }
       },
    }
</script>

<style>
  .student{
      background-color: orange;
  }
</style>
