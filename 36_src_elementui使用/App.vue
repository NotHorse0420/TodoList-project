<template>
  <div>
    <button>
      原生的按钮
    </button>
    <input type="text">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" >成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" >警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
  export default {
    name:'App',
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style>
  
</style>

