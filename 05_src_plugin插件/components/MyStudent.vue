<template>
    <div class="student">
        <h2>{{name}}</h2>
        <h2>{{sex}}</h2>
    </div>
</template>
<script>
    //引入一个混合
    export default{
        name:'MyStudent',
       data(){
           return{
               name:'A',
               sex:'male',
               x:666//如果这里有这个数据，还引入了混合，则以这个为主
           }
       },
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