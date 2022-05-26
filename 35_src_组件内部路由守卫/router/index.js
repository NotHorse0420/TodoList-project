//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyAbout from '../pages/MyAbout'
import MyMessage from '../pages/MyMessage'
import MyNews from '../pages/MyNews'
import MyDetail from '../pages/MyDetail'

 const router = new VueRouter({
  routes:[
    {
      name:'guanyu',
      path:'/MyAbout',
      component:MyAbout,
      meta:{isAuth:true,title:'关于'}
    },
    {
      name:'zhuye',
      path:'/MyHome',
      component:MyHome,
      meta:{title:'主页'},
      children:[
        {   
            name:'xiaoxi',
            path:'MyMessage',
            component:MyMessage,
            meta:{isAuth:true,title:'消息'},
            children:[
              {
                name:'xiangqing',
                path:'MyDetail',//query参数在这里就不用声明接收了
                component:MyDetail,
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
            name:'xinwen',
            path:'MyNews',
            meta:{isAuth:true,title:'新闻'},
            component:MyNews,
          }  
      ]
    }
  ]
})

export default router