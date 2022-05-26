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
      meta:{title:'关于'}
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
            deforeEnter:(to,from,next)=>{//
              console.log(to,from)
              document.title = to.meta.title
              if(to.meta.isAuth){ //判断是否需要鉴定权限
              if(localStorage.getItem('name')==='xyn'){
                //document.title = to.meta.title || 'test'
                next()
              }else{
                alert(' Name error')
              }
              }else{
              //document.title = to.meta.title || 'test'
              next()
              }
            }
          }  
      ]
    }
  ]
})


/*
//全局前置路由守卫
//初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to,from,next)=>{//普通函数或者箭头函数都可以
  console.log(to,from)
  document.title = to.meta.title
  if(to.meta.isAuth){ //判断是否需要鉴定权限
    if(localStorage.getItem('name')==='xyn'){
      //document.title = to.meta.title || 'test'
      next()
    }else{
      alert(' Name error')
    }
  }else{
    //document.title = to.meta.title || 'test'
    next()
  }
})

//全局后置路由守卫
//初始化的时候被调用，每次路由切换之前被调用
router.afterEach((to,from)=>{
  console.log(to,from)
  document.title = to.meta.title || 'test'
})
*/

export default router