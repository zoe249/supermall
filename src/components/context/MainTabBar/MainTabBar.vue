<template>
      <tab-bar>
      <tab-bar-item path="/Home" activeColor="#D4237A">
         <img slot="item-icon" src="@/assets/img/tabbar/tab-home.png" alt="">
         <img slot="item-icon-active" src="@/assets/img/tabbar/tab-home1.png" alt="">
         <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#D4237A">
        <img slot="item-icon" src="@/assets/img/tabbar/tab-class.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab-class1.png" alt="">
         <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#D4237A">
        <img slot="item-icon" src="@/assets/img/tabbar/tab-hold.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab-hold1.png" alt="">
         <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#D4237A">
        <img slot="item-icon" src="@/assets/img/tabbar/tab-my.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab-my1.png" alt="">
         <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
   
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components//common/tabbar/TabBarItem.vue'
export default {
components: {
    TabBar,
    TabBarItem
    
  }
}
</script>

<style>

</style>