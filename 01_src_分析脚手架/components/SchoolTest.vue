<template>
    <!--组件的结构-->
    <div class="demo">
        <h1>学校地址：{{address}}</h1>
        <h1>学校名称：{{SchoolName}}</h1>
    </div> 
</template>

<script>
    //组件交互相关的代码（数据，方法等）
    export default{
        name:'SChool',
        data(){
            return{
                SchoolName:'Baidu',
                address:'Beijing'
            }
        }
    }
</script>

<style>
    /*组件的样式*/
    .demo{
        background-color: orange;
    }
</style>
