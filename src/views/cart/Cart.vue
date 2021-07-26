<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cartList/>

    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'



import {mapGetters} from 'vuex'
export default {
  name:'cart',
  data () {
    return {
      
    }
  },
  computed: {
    // mapGetters两种语法
    // ...mapGetters(["cartLength","cartLength"])
    ...mapGetters({
      cartLength:"cartLength",

    })
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    
  }
};
</script>

<style  scoped>
.cart{
  height: 100vh;
  /* width: 100vw; */
}
.nav-bar{
  background-color:#FF8E96;
  font-weight: 900;
  color: #fff;
  
}
</style>