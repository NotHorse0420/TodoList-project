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
                path:'MyDetail/:id/:title',
                component:MyDetail
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