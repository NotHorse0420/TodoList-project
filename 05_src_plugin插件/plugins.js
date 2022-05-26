export default{
    
    install(Vue){
        Vue.filter('Myfilter',function(value){
            return value.slice(0,4)
        })
        //定义全局指令
        Vue.directive('fbind',{
            //一上来进行绑定
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element){
                element.focus()
            },
            //指令所在模板被重新解析时
            update(element,binding){
                element.value = binding.value
            } 
        })
        //定义混合
        Vue.mixin({

        })
        //给Vue实例对象添加一个方法（vm和vc都能使用）
        Vue.prototype.hello = ()=>{alert('!!!!!')}
    }
}