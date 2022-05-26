<template>
  <div>
      <MyStudent></MyStudent>
  </div>
</template>

<script>
/**
  全局引入
  import {mixin,mixin0} from './mixin'
  Vue.mixin(mixin)
  Vue.mixin(mixin0)
 */
  import MyStudent from './components/MyStudent.vue'
  export default {
    name:'App',
    components:{MyStudent}
  }
</script>

<style>

</style>