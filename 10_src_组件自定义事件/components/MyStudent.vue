<template>
    <div class="student">
        <h2>{{name}}</h2>
        <h2>{{sex}}</h2>
        <button @click="giveparent">给App</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁当前实例对象</button>
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
       methods:{
           giveparent(){
               //利用emit响应自定义事件
               this.$emit('getStudentname',this.name)
           },
           unbind(){
               this.$off('getStudentname')//只适用于解绑一个自定义事件
               //解绑多个事件，参数写成数组
               //也可以不传参数，解绑所有事件
           },
           death(){
               this.$destroy()
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
