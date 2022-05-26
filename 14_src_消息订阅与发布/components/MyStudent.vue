<template>
    <div class="student">
        <h2>{{name}}</h2>
        <h2>{{sex}}</h2>
        <button @click="test">把数据给School</button>
    </div>
</template>

<script>
   import pubsub from 'pubsub-js'
    export default{
        name:'MyStudent',   
        data(){
            return{
                name:'A',
                sex:'male'
            }
        },
        methods:{
            test(){
                pubsub.publish('hello',666)
            }
        }
    }
</script>

<style lang="less" scoped>
  .student{
      background-color: orange;
      padding: 5px;
      margin-top: 30px;
  }
</style>
