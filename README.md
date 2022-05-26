#笔记

## 修改
  1.pubulic文件夹名字包括index.html的位置不能改，页面图标名字不能改
  2.src名字不能改
  3.main.js不能改

## vue.config.js配置文件
  1.使用vue inspect > output.js可以查看Vue脚手架的默认配置（只能看）
  2.使用vue.config.js可以对脚手架进行个性化定制

## ref属性
  1. 被用来给元素或子件注册引用信息（id的替代者）
  2. 应用在html标签上获取真实DOM，应用在组件标签上是组件实例对象（vc）
  3. 使用方法：
      打标签：ref="xxx"
      获取：this.$refs.xxx

## props配置
  分为三种接收
  1. props:['name','age','sex']简单接收
  2. 类型限制接收
       props:{
         name:String,
         age:Number,
         sex:String
       }
  3. 最完整写法
       props:{
           name:{
               type:String,//name的类型是字符串
               required:true//name是必要的
           },
           sex:{
               type:String,
               required:true//默认值
           },
           age:{
               type:Number,
               default:99
           }
       }
    }
    //props中的数据一般不允许修改，可以在组件中申明一个数据去接收这个数据，然后改申明的

## mixin 混入
   可以把多个组件共有的配置提取成一个混入对象
   使用方法
       第一步定义混合，{data(){...},methods:{...},...}
       第二步使用混合，
           (1)全局混入Vue.mixin(xxx)
           (2)局部混入：mixin:['xxx']

## 插件
    增强Vue
    包含install方法的一个对象，install的第一个参数时Vue，第二个以后的参数是使用者传递的数据
    使用就是Vue.use

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## 案例
    实现静态组件
      拆分静态组件：按照功能来拆分，命名不要冲突
      实现动态组件：考虑好数据的存放位置，数据是几个组件再用，如果是一堆在用，就放在他们的父组件中（状态提升）
                   实现交互：从绑定事件开始
    展示动态数据
    组件间通信：
        父亲给儿子传：props
        儿子给父亲传：父亲定义一个函数，将它作为props给儿子，然后儿子往函数里面塞参数
        兄弟间传
    用v-model时不能绑定props传过来的值，因为不能改
        props传的是对象数据时，是可以修改对象内部的属性的值的，但是不推荐

## 组件的自定义事件
    1.一种组件间通信的方法，适用于：子组件==>父组件
    2.使用场景：A为父，B为子，B给A传数据，需要在A中给B绑定自定义事件，B中通过emit触发，然后事件的回调在A身上
    3.绑定自定义事件的方法：
        在父组件中：
          1. @ABC="test" 或者 v-on:ABC="test"
          2.<Demo ref="ABC">
            ...
            mounted(){
                this.$refs.xxx.$on('ABC',this.test)//当然还要申明这个test事件的内容在父组件中
            }
          3.如果想要只触发一次，可以使用once修饰符，或者$once方法。
    4.触发自定义事件
        this.$emit('ABC',数据)
    5.解绑自定义事件
        this.$off('ABC')
    6.组件上也可以绑定原生DOM事件，需要使用native修饰符，要不然会认为是自定义事件，任然需要在子组件上加$emit才能触发
    7.注意：
        通过this.$refs.xxx.$on('ABC',this.test)绑定自定义事件时，父组件中的回调要么配置在method中，要么用箭头函数，否则this的指向将出现问题

## 全局事件总线(GlobalEventBus)
    1.可以实现任意组件之间通信
    2.安装全局事件总线
      new Vue({
        render:h=>h(App),
        beforeCreate(){
          Vue.prototype.$bus = this//安装全局事件总线
        }
      }).$mount('#app')
    3.使用事件总线
      1.接收数据:A组件想要接收数据,则在A组件上给全局事件($bus)总线绑定自定义事件,回调放在A身上
        methods(){
            demo(data){...}
        }
        mounted(){
            this.$bus.$on('xxx',this.demo)
        }
        或者
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件,我收到了',data)//这个回调函数是写在school组件上的,这里的this是scool组件
            })
        },
      2.提供数据:
        this.$bus.$emit('xxx',数据)
    4.最好在beforeDestroy钩子中,用$off解绑当前组件所用到的事件

## 消息订阅与发布
    1.实现任意组件通信
    2.使用步骤
      1.安装第三方库pubsub.js,也可以是其他的
      2.引入 import
      3.接收数据:
        A组件想接收数据,就在A组件中订阅消息,订阅的回调在A身上
          methods:{
              demo(data){
                  ...
              }
          },
          mounted(){
              this.pid = pubsub.subscribe('xxx',this.demo)
          },
          beforeDestroy(){
              pubsub.unsubscribe('xxx')//别忘了在销毁前取消订阅
          }
      3.提供数据
        pubsub.publish('xxx',数据)      

## nextTick
    1.语法:this.$nextTick(回调函数)
    2.作用是在下一次dom更新结束后执行其指定的回调
    3.什么时候用:当改变数据后,要根据更新后的dom进行某些操作时,要在nexttick指定的回调函数中执行
    注释:用定时器也可以实现

## Vue封装的过渡与动画
    1.在插入,更新或删除DOM元素时,在合适的时候给元素添加样式类名.
    2.写法:
      1.准备好样式:
        进入样式:
          1.v-enter:进入的起点
          2.v-enter-active:进入的过程中
          3.v-enter-to:进入的终点
        离开样式:
          1.v-leave:进入的起点
          2.v-leave-active:进入的过程中
          3.v-leave-to:进入的终点
      2.使用<transition>包裹过度元素,并配置name属性
      3.如果是多个过渡,则用<trasition-group>并且有统一的key值

## vue脚手架配置代理
    方法一：
      在vue.config.js中添加如下的配置：
        devServer{
          proxy:"http://localhost:5000"
        }
      说明：
        1.优点：配置简单，请求资源时直接发给前端（8080）即可
        2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理
        3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先配置前端资源,即优先匹配8080资源）
    方法二：
      编写vue.config.js配置具体代理规则：
      module.exports={
        devServer:{
          proxy:{
            '/api1':{//匹配所有以'/api'开头的请求路径
            'target':'http://localhost:5000',//代理目标的基础路径
            changeOrigin:true,//true时服务器收到的请求头中的host是5000，false时是8080
            pathRewrite:{'^/api1':''}
            },
            '/api2':{//匹配所有以'/api'开头的请求路径
            'target':'http://localhost:5001',//代理目标的基础路径
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
          }
        }
      }
      说明：
        1.优点：可以配置多个代理，且可以灵活控制是否走代理
        2.缺点：配置略微繁琐，请求资源时必须加前缀
      
## 插槽
    1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件通信的方式，适用于 父组件===>子组件
    2.分类：默认插槽，具名插槽，作用域插槽
    3.使用方法：
      1.默认插槽
        父组件：
            <Category>
              <div>html结构1</div>
            </Category>
        子组件：
            <template>
              <div>
                <!--定义插槽-->
                <slot>插槽默认样式</slot>
              </div>
            </template>
      2.具名插槽
        父组件：
          <Category>
            <template slot="center">//或者v-slot:center
              <div>html结构1</div>
            </template>
          </Category>
        子组件：
          <template>
            <div>
              <!--定义插槽-->
              <slot name="center">插槽默认样式</slot>
            </div>
          </template>
      3.作用域插槽
        1.理解：数据在组件的自身，但是根据数据生成的结构需要组件的使用者来决定。
        2.具体编码
          父组件：
            <Category>
              <template scoped="scopeData">
                //生成的是ul列表
                <ul>
                  <li v-for="g in scopeData.games" :key="g">{{g}}</li>
                </ul>
                //生成h4标题
                  <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
              </template>
            </Category>
          子组件：
            <template>
              <div>
                <slot :games="games"></slot>
              </div>
            </template>

           <script>
             export default{
              name:'Category',
              props:['title'],
              data(){
                return{
                  games:['a','b','c']
                }
              }
             }
           </script>
        注释：也可以起名字

## vuex
    1.初始化数据，配置actions，配置mutations，操作文件store.js
    2.组件中读取vuex中的数据 $store.state.sum
    3.组件中修改vuex中的数据 $store.dispatch('action中的方法名'，数据)或者$store.commit('mutations中的方法名'，数据)
    备注：如果逻辑简单且不包含网络请求，可以直接跳过action编写commit调用mutations中的方法

## 四个map方法的使用
    1.mapState方法：用于帮助我们映射state的数据为计算属性
    2.mapGetters方法：用于帮助我们映射的数据为计算属性
    3.mapActions方法：用于帮助我们生成与actions对话的方法，包含dispatch函数
    4.mapMutations方法：用于帮助我们生成与mutations对话的方法，包含commit函数
    注意：传参

## 模块化+命名空间
    1.让代码更好维护，让数据分类明确，可以避免命名冲突
    2.修改store.js
    3.开启命名空间，组件中读取state数据
      1.this.$store.state.personAbout.list
      2....mapState('personAbout',['sum','school','subject'])
    4.开启命名空间，组件中读取getters数据
      1.this.$store.getters['personAbout/firstPersonName']
      2....mapGetters('countAbout',['bigSum'])
    5.开启命名空间，组件中调用dispatch
      1.this.$store.dispatch('personAbout/addPersonName',person)
      2....mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    6.开启命名空间，组件中调用commit
      1.this.$store.commit('personAbout/ADD_PERSON',person)
      2....mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})

## 路由
    1.安装
    2.应用插件
    3.编写配置项
      /该文件专门用于创建整个应用的路由器
      import VueRouter from 'vue-router'
      import MyHome from '../components/MyHome'
      import MyAbout from '../components/MyAbout'

      export default new VueRouter({
        routes:[
          {
            path:'/MyAbout',
            component:MyAbout
          },
          {
            path:'/MyHome',
            component:MyHome
          }
        ]
      })
    4.实现切换
      <router-link class="list-group-item" active-class="active" to="/MyAbout">About</router-link>
      <router-link class="list-group-item" active-class="active" to="/MyHome">Home</router-link>
    5.实现展示
      <router-view></router-view>
    6.几个注意点
      1.路由组件通常放在pages文件中，一般组件通常存放在components文件
      2.通过切换、隐藏了路由的组件，默认是被销毁掉的，需要时再去挂载
      3.每个组件都有自己的$route属性，里面存储着自己的路由信息
      4.整个应用只有一个router，可以通过组件的$router属性获取到

## 路由的params参数
    1.配置路由，声明接收params参数
    2.传递参数
      注意：如果是params参数，使用对象写法时，不能使用path配置项，必须使用name配置
    3.接收参数

## router-link的replace属性
    1.作用：控制路由跳转时操作浏览器历史记录的模式
    2.浏览器的历史记录有两种写入方式：分别是push和replace，push是追加历史记录，replace时替换当前记录，路由跳转的时候默认为push
    3.如何开启replace模式：直接在标签中加上replace即可

## 路由守卫
    1.全局前置守卫
    2.全局后置守卫
    3.独享守卫
    4.组件内路由守卫
      //进入守卫，通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){
          console.log(to,from)
          if(to.meta.isAuth){
            if(localStorage.getItem('name')==='xyn'){
              next()
            }else{
              alert('error')
            }
          }else{
            next()
          }
        },
      //离开守卫，通过路由规则，离开组件时被调用 
        beforeRouteLeave(to,from,next){
          console.log(to,from)
          next()
        }

## 路由器的两种工作模式
    1.对于url来说，什么是hash值？---#及其后面的内容都是hash值
    2.hash值不会包含在http请求中---hash值是不会传给服务器的
    3.hash模式
      1.不美观
      2.第三方手机可能会校验不合法
      3.兼容性好
    4.history模式
      1.地址干净，美观
      2.兼容性略差
      3.应用部署后，需要后端人员解决刷新后404问题

## Vue UI组件库
    1.移动端
      Vant / Cube UI / Mint UI
    2.pc端
      Element UI / IView UI



        