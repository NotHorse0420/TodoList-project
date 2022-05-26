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
  name:'MynewTest',
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
    transition: 1s;
  }
  /*进入的起点,离开的终点 */
  .hello-enter,.hello-leave-to{
    transform: translate(-100%);
  }
  /*进入的终点,离开的起点 */
  .hello-enter-to,.hello-leave{
    transform: translate(0);
  }
</style>