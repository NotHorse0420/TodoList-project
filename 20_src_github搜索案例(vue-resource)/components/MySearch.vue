<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  //import axios from 'axios'
  export default {
    name:'MySearch',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
          //请求前更新List的数据
          this.$bus.$emit('UpdateListdata',{isFirast:true,isLoading:true,errMsg:'',users:[]})
          this.$http.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
              response => {
                console.log('请求成功了')
                //请求成功后更新List数据
                this.$bus.$emit('UpdateListdata',{isLoading:false,errMsg:'',users:response.data.items})
              },
              error => {
                //请求失败后更新List数据
                console.log('请求失败了',error.message)
                this.$bus.$emit('UpdateListdata',{isLoading:false,errMsg:error.message,users:[]})
              }
          )
        }
    }
  }
</script>

<style>

</style>