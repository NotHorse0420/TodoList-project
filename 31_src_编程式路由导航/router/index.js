//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyAbout from '../pages/MyAbout'
import MyMessage from '../pages/MyMessage'
import MyNews from '../pages/MyNews'
import MyDetail from '../pages/MyDetail'

export default new VueRouter({
  routes:[
    {
      name:'guanyu',
      path:'/MyAbout',
      component:MyAbout
    },
    {
      path:'/MyHome',
      component:MyHome,
      children:[
        {
            path:'MyMessage',
            component:MyMessage,
            children:[
              {
                name:'xiangqing',
                path:'MyDetail',//query参数在这里就不用声明接收了
                component:MyDetail,
                //props第一种写法，值为对象，该对象的所有key-value都会以props形式传给Detail组件
                //props:{a:1,b:'hello'}
                //第二种写法，值为布尔值,若为真，就会把所有的params参数,以props的形式传给Detail组件
                //props:true
                //第三种写法，值为函数,返回值必须是对象
                /*props($route){
                  return {
                    id:$route.query.id,
                    title:$route.query.title
                  }*/
                 props({query:{id,title}}){//解构赋值&解构赋值的连续性写法
                    return {
                      id,
                      title
                    }
                }
              }
            ]
        },
        {
            path:'MyNews',
            component:MyNews
        }  
      ]
    },
]
})