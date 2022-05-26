<template>
    <div class="student">
        <h2 @click="showName">{{name}}</h2>
        <h2>{{sex}}</h2>
    </div>
</template>
<script>
    //引入一个混合
    import {mixin,mixin0} from '../mixin'
    export default{
        name:'MyStudent',
      
       data(){
           return{
               name:'A',
               sex:'male',
               x:666//如果这里有这个数据，还引入了混合，则以这个为主
           }
       },
       mixins:[mixin,mixin0],
       mounted(){
           console.log('!!!!!!!!!!!')
       }//如果都有，混合的在前，这个在后，都会触发
    }
</script>
<style>
    .student{
        background-color: bisque;
    }
</style>