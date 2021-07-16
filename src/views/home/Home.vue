<template>
  <div id="home">
    <!-- Nav顶部导航 -->
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <!-- <router-view/> -->
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <recomment-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "@/network/home";
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommentView from './childComps/RecommendView.vue'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res)
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    });
  },
  mounted() {
    
  },
  methods: {
    
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommentView
  },
};
</script>

<style lang="less" scoped>
.home-nav {
  background: pink;
  // margin: 3px 5px;
  color: #fff;
  font-weight: 900;
}


</style>