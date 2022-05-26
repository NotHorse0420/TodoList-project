<template>
    <div class="school">
        <h2>{{Name}}</h2>
        <h2 class="address">{{Address}}</h2>
    </div>
</template>
<script>
    export default{
        name:'MySchool',
        data(){
            return{
            Name:'b',
            Address:'B'
            }
        },
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件,我收到了',data)//这个回调函数是写在school组件上的,这里的this是scool组件
            })
        },
        deforeDestroy()
            {
                this.$bus.$off('hello')
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