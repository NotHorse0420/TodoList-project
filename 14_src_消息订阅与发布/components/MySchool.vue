<template>
    <div class="school">
        <h2>{{Name}}</h2>
        <h2 class="address">{{Address}}</h2>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
    export default{
        name:'MySchool',
        data(){
            return{
            Name:'b',
            Address:'B'
            }
        },
        mounted(){
            this.pubId = pubsub.subscribe('hello',(msgname,data)=>{
                console.log('检测到发布了hello消息,消息的回调执行了',msgname,data)
            })
        },
        deforeDestroy(){
            pubsub.unsubscribe(this.pubId)    
        }
    }
</script>

<style lang="less">//less方法，不写默认就是css
  .school{
      background-color: gray;
      .address{
          font-size:200px;
      }
  }
</style>