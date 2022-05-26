<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!--绑定一个自定义事件完成子传父（可以写成@）-->
    <MyStudent/>
    <MySchool/>
  </div>
</template>

<script>
  import MyStudent from './components/MyStudent.vue'
  import MySchool from './components/MySchool.vue'
  
  export default {
    name:'App',
    components:{MyStudent,MySchool},
    data(){
      return{
        msg:'hello!'
      }
    }
  }
</script>

<style>
  .app{
    background-color: red;
    padding: 5px;
  }
</style>