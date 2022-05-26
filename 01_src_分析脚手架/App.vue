<template>
  <div>
    <img src="./assets/logo.png" alt="官网图片">
      <SChool></SChool>
      <STudent></STudent>
  </div>
</template>

<script>
  import SChool from './components/SchoolTest.vue'
  import STudent from './components/StudentTest.vue'

  export default {
      name:'App',
      components:{
          SChool,
          STudent
      }
  }
</script>
