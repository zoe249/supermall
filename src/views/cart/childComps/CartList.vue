<template>
  <div class="cart-list">
      <scroll class="content" ref="scroll">
          <cart-list-item 
          v-for="(item,index) in cartList" 
          :key="index"
          :product="item"/>
      </scroll> 
  </div>
</template>

<script>

import Scroll from '@/components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
export default {
    props: {
        cartlist:{
            type:Object,
            default(){
                return{

                }
            }
        }
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    components: {
        Scroll,

        CartListItem
    },
    activated () {
        this.$refs.scroll.refresh()
    }

}
</script>

<style scoped>
    .cart-list{
         height: calc(100vh - 44px - 49px - 40px);
        
    }
    .content{
       height: 100vh;
        overflow: hidden;
    }
</style>