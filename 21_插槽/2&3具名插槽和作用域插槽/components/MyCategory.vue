<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot>这里可以设置默认值，如果是没传东西就会出现</slot>
  </div>
</template>

<script>
  export default {
    name:'MyCategory',
    props:['title']
  }
</script>

<style>
  .category{
      background-color: rgb(200, 200, 169);
      width: 200px;
      height: 300px;
  }
</style>