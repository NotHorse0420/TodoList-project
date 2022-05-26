<template>
  <div>
      <MyStudent name="ls" sex="女" :age="18"></MyStudent>
  </div>
</template>

<script>
  import MyStudent from './components/MyStudent.vue'
  export default {
    name:'App',
    components:{MyStudent}
  }
</script>

<style>

</style>