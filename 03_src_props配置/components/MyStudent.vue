<template>
    <div class="student">
        <h2>{{name}}</h2>
        <h2>{{MyAge+1}}</h2>
        <h2>{{sex}}</h2>
    </div>
</template>
<script>
    export default{
        name:'MyStudent',
       // props:['name','age','sex']简单接收
       //类型限制接收
      /* props:{
           name:String,
           age:Number,
           sex:String
       }*/
       data(){
           return{
               MyAge:this.age
           }
       },
       props:{
           name:{
               type:String,//name的类型是字符串
               required:true//name是必要的
           },
           sex:{
               type:String,
               required:true//默认值
           },
           age:{
               type:Number,
               default:99
           }
       }
    }
    //props中的数据一般不允许修改，可以在组件中申明一个数据去接收这个数据，然后改申明的
</script>
<style>
    .student{
        background-color: bisque;
    }
</style>