<template>
    <div class="school">
        <h2>{{Name}}</h2>
        <h2 class="address">{{Address}}</h2>
    </div>
</template>
<script>
    export default{
        name:'MySchool',
        data(){
            return{
            Name:'b',
            Address:'B'
            }
        }
    }
</script>

<style lang="less">//less方法，不写默认就是css
  .school{
      background-color: gray;
      .address{
          font-size:200px;
      }
  }
</style>