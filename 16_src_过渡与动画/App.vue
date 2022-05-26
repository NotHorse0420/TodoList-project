<template>
  <div>
    <MyTest/>
    <MynewTest/>
    <MyproTest/>
  </div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MynewTest from './components/MynewTest.vue'
import MyproTest from './components/MyproTest.vue'
export default {
   name:'App',
   components:{MyTest,MynewTest,MyproTest}
}
</script>
