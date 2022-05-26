<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition 
      name="animate__animated animate__bounce" 
      :appear="true"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">Hello</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name:'MyproTest',
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

</style>