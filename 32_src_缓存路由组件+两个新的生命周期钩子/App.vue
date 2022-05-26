<template>
  <div>
    <div class="row">
      <MyBanner></MyBanner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始html中我们使用a便签实现页面的跳转-->
          <!--<a class="list-group-item active" href="./MyAbout.html">About</a>
          <a class="list-group-item" href="./MyHome.html">Home</a>-->

          <!--借助router-link实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/MyHome">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--指定组件的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyBanner from './components/MyBanner.vue'
  export default {
    name:'App',
    components:{MyBanner}
  }
</script>

<style>
  
</style>

