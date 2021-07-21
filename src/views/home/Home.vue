<template>
  <div id="home" class="wrapper">
    <!-- Nav顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <!-- <router-view/> -->

      <tab-control
        class="tab-control"
        :titles="['精品', '潮流', '热卖']"
        @tabClick="tabClick"
       ref="tabControl1"
       v-show="isTabFixed"
       />
    
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recomment-view :recommends="recommends" />
      <feature-view />
      <tab-control
        
        :titles="['精品', '潮流', '热卖']"
        @tabClick="tabClick"
       ref="tabControl2"
       />
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
import {debounce} from '@/common/utils'
import {itemListenerMixin} from '@/common/mixin'

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommentView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import BackTop from "@/components/context/backTop/BackTop.vue";

export default {
  mixins: [itemListenerMixin],
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
      topOffsetTop:0,
      isTabFixed:false,
      saveY:0,
      
     
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

        this.$refs.scroll.finishPullUp()
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
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


      // 判断backtop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 判断tabcontrol是否吸顶（position：fixed）
      this.isTabFixed = (-position.y) > this.topOffsetTop
    },
    // 下拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
        // console.log(this.$refs.tabControl1.currentIndex)
        //  console.log(this.$refs.tabControl2.currentIndex)
        this.topOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
    
  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    // 消除活跃状态，保存y
    this.saveY = this.$refs.scroll.getScrollY

    // 取消全局事件的监听
    this.$bus.$off('itemImgLoad',this.ItemImgListener)
    
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
  // padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background: pink;
  // margin: 3px 5px;
  color: #fff;
  font-weight: 900;
  // position: fixed;
  // left: 0;
  // right: 0;
  // top: 0;
  // z-index: 10;
}
.tab-control {
  z-index: 9;
  position:relative;
  // top: 44px;
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

// 吸顶效果

</style>