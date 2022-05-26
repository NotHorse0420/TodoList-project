<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!--绑定一个自定义事件完成子传父（可以写成@）-->
    <MyStudent v-on:getStudentname="getStudentname"></MyStudent>
    <!--通过父组件给子组件传递函数类型的props实现：子传父-->
    <MySchool :getSchoolname="getSchoolname"></MySchool>
     <!--绑定一个自定义事件完成子传父，第二种方法，使用ref-->
    <MyStudent ref="student"></MyStudent>
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
    },
    methods:{
      getSchoolname(name){
        console.log(name)
      },
      getStudentname(name){//可以继续加参数例如：(name...params)就是将第一个参数作为name进行输出，其他全部作为params数组元素
        console.log(name)
      }
    },
    mounted(){
      setTimeout(()=>{
        this.$refs.student.$on('ABC',this.getStudentname)//on不给用了，只准用一次就改成once
      },3000)
    }
  }
</script>

<style>
  .app{
    background-color: red;
    padding: 5px;
  }
</style>