<template>
  <div>
      <h1>当前求和为：{{sum}}</h1><!--可以把这个写入computed中，然后return sum = $store.state.sum-->
      <h3>放大十倍：{{bigSum}}</h3>
      <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd(n)">当前求和为奇数再加</button>
      <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name:'MyCount',
    data(){
      return{
        n:1,//用户选择的数字
        
      }
    },
    computed:{//这里可以靠自己写计算属性
      /*he(){
        return this.$store.state.sum
      }*/
      //...mapState({he:'sum'}),//这样就可以不用自己写,对象写法
      //这里的...是将后面的对象里的每一项放入computed中
      
      //这是数组写法，此时计算属性的名字也是sum，即sum:'sum'
      ...mapState(['sum']),

      //mapGetters同理
      ...mapGetters(['bigSum'])
    },
    methods:{
      //这是自己写的commit给mutations的方法
      /*increment(){
        this.$store.commit('JIA',this.n)
      },
      decrement(){
        this.$store.commit('JIAN',this.n)
      },*/
      //使用mapMutations
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),//类似的也有数组方法
      //自己写给actions
      /*incrementOdd(){
        this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.n)
      },*/
      //使用mapActions
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})//同上
    },
    mounted(){
      const x = mapState({he:'sum'})
      console.log(x)
    },
  }
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>