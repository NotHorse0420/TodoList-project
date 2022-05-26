<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/MyHome/MyNews">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/MyHome/MyMessage">Message</router-link>
        </li>
      </ul>
      <keep-alive include="MyNews"><!--这里是组件的名字-->
         <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MyHome'
  }
</script>

<style>

</style>