<template>
  <div id="home" class="wrapper">
    <!-- Nav顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <!-- <router-view/> -->
    <!-- 轮播图 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      pull-up-load="true">
      <home-swiper :banners="banners"></home-swiper>
      <recomment-view :recommends="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['精品', '潮流', '热卖']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list
        class="goods-list"
        v-for="(item, index) in goods"
        :key="index"
        :goods="showGoods"
      />
    </scroll>

    <!-- 返回顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/context/TabControl/TabControl.vue";
import goodsList from "@/components/context/goods/goodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommentView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import BackTop from "@/components/context/backTop/BackTop.vue";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
    
    this.$bus.$on('itemImageLoad',()=>{
      // console.log('------------')
     refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.data.list)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        // this.$refs.scroll.finishPullUp()
      });
    },

    // 点击切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      // if( (-position.y) > 1000){
      //   this.isShowBackTop = true
      // }else{
      //   this.isShowBackTop = false
      // }
      this.isShowBackTop = -position.y > 1000;
    },
    // 防抖函数
    debounce(func,delay){
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    }
    
  },
  components: {
    HomeSwiper,
    RecommentView,
    FeatureView,
    BackTop,

    NavBar,
    TabControl,
    goodsList,
    Scroll,
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background: pink;
  // margin: 3px 5px;
  color: #fff;
  font-weight: 900;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
}
.tab-control {
  z-index: 9;
  position: sticky;
  top: 44px;
  background: #fff;
}

.goods-list {
  padding-bottom: 49px;
}
// 滑动
.content {
  // height:300px;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}

// .content{
//   height: calc(100% - 93px);
//   overflow: hidden;
//   margin-top: 44px;
// }
</style>