<template>
  <h2>这是about</h2>
</template>

<script>
  export default {
    name:'MyAbout',
    //进入守卫，通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){
      console.log(to,from)
      if(to.meta.isAuth){
        if(localStorage.getItem('name')==='xyn'){
          next()
        }else{
          alert('error')
        }
      }else{
        next()
      }
    },
    //离开守卫，通过路由规则，离开组件时被调用 
    beforeRouteLeave(to,from,next){
      console.log(to,from)
      next()
    }
  }
</script>

<style>

</style>