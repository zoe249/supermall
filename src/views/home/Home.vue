<template>
  <div id="home">
    <!-- Nav顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <!-- <router-view/> -->
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <recomment-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['精品', '潮流', '热卖']" @tabClick="tabClick"></tab-control>
    <goods-list class="goods-list" v-for="(item,index) in goods" :key="index" :goods="showGoods" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/context/TabControl/TabControl.vue";
import goodsList from '@/components/context/goods/goodsList.vue'
 
import { getHomeMultidata,getHomeGoods} from "@/network/home";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommentView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    };
  },
  created() {
    // 1.请求多个数据
   this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 网络请求相关方法
    getHomeMultidata(){
       getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then((res)=>{
        // console.log(res.data.data.list)
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1
    })
    },

    // 点击切换
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
        break;
        case 1:
          this.currentType = 'new'
        break;
        case 2:
          this.currentType = 'sell'
        break;
        
      }
    }
  },
  components: {
    HomeSwiper,
    RecommentView,
    FeatureView,

    NavBar,
    TabControl,
    goodsList
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 44px;
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
.tab-control{
  z-index: 9;
  position: sticky;
  top: 44px;
  background: #fff;
}

.goods-list{
padding-bottom: 49px;
}
</style>