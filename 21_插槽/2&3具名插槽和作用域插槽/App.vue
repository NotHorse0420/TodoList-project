<template>
  <div class="container">
    <MyCategory title='foods' :listData="foods">
      <h3>插槽！！！！！</h3>
    </MyCategory>
    <MyCategory title='animals' :listData="animals">
      <li v-for="(g,index) in games" :key="index">{{g}}</li>
    </MyCategory>
    <MyCategory title='games' :listData="games">
      <button>随便传</button>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory'
export default {
   name:'App',
   components:{MyCategory},
   data(){
     return{
       foods:['beef','noodles','hotpot'],
       animals:['cat','dog','rabbit'],
       games:['super mario','ultra sonic','plants vs zombies']
     }
   }
}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }

  h3{
    text-align: center;
    background-color: rgb(131, 175, 155);
  }
</style>

