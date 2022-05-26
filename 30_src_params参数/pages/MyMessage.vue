<template>
  <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
        
        <!--跳转路由携带query参数，to的字符串写法-->
        <router-link :to="`/MyHome/MyMessage/MyDetail/666/hello`">{{m.title}}</router-link>&nbsp;&nbsp;
 
         <!--跳转路由携带query参数，to的对象写法-->
       
        <!--<router-link :to="{
          path:'/MyHome/MyMessage/MyDetail',
          query:{这里直接改成params就行，但是不能用path只能用name
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp;-->
        
        </li>
      </ul>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'MyMessage',
    data(){
      return{
        messageList:[
          {id:'001',title:'消息001'},
          {id:'002',title:'消息002'},
          {id:'003',title:'消息003'}
        ]
      }
    }
  }
</script>