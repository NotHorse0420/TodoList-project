<template>
  <div>
    <MyCount></MyCount>
    <MyPerson></MyPerson>
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue'
import MyPerson from './components/MyPerson.vue'
  export default {
    name:'App',
    components:{MyCount,MyPerson},
  }
</script>

<style>
  
</style>

