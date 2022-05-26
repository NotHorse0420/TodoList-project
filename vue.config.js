const { defineConfig } = require('@vue/cli-service')//这个js里面的内容会替换原有配置
module.exports = defineConfig({//commonjs的暴露方式，因为这是要给nodejs的
  transpileDependencies: true,
  /*pages:{
    入口
    entry：''
  }*/
  lintOnSave : false//关闭语法检查
})
