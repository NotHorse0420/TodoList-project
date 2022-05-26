<template>
  <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
          <button @click="Back">后退</button>
          <button @click="Forward">前进</button>
        </div>
  </div>
</template>

<script>
  export default {
    name:'MyBanner',
    methods:{
      Back(){
        this.$router.back()
      },
      Forward(){
        this.$router.forward()
      }
    }
  }
</script>

<style>

</style>