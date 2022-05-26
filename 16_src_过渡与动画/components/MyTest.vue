<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
      <h1 v-show="isShow">Hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'MyTest',
  data(){
    return{
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  .hello-enter-active{
    animation: ABC 1s;
  }

  .hello-leave-active{
    animation: ABC 1s reverse;
  }

  @keyframes ABC {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>