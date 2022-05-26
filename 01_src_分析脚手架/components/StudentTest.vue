<template><!--这种组件里的template有专门的库解析-->
    <!--组件的结构-->
    <div>
        <h1>学生姓名：{{StudentName}}</h1>
        <h1>学生年龄：{{age}}</h1>
    </div> 
</template>

<script>
    //组件交互相关的代码（数据，方法等）
    export default{
        name:'STudent',
        data(){
            return{
                StudentName:'zs',
                age:18
            }
        }
    }
</script>
