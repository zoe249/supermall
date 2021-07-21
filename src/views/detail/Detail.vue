<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />

    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <deail-shop-info :shop="shop" class="deail-shop-info" />
      <detail-param-info :paramInfo="paramInfo" class="detail-param-info"/>
      <detail-comment-info :commentInfo="commentInfo" class="detail-comment-info"/>
      <detail-goods-info :detailInfo="detailImages" @imageLoad="imageLoad" class="detail-goods-info" />
      <good-list :goods="recommend" class="good-lis"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DeailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

import GoodList from '@/components/context/goods/goodsList.vue'
import {itemListenerMixin} from '@/common/mixin'

import Scroll from "@/components/common/scroll/Scroll.vue";

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "@/network/detail";
import {debounce} from '@/common/utils'
export default {
  name: "Detail",
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImages: {},
      paramInfo: {},
      commentInfo: {},
      recommend:[]
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.data.result;
      //   获取顶部的图片
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.获取商店信息
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailImages = data.detailInfo;
      // 5.取出参数信息
      this.paramInfo = data.itemParams;
      
      //6. 取出评论信息
      if(data.rate.cRate != 0){
        this.commentInfo = data.rate.list[0]

      }
      // 监听详情加载完
    });

    getRecommend().then((res)=>{
        this.recommend = res.data.data.list
    })
  },
  mounted() {
    
  },
  destroyed () {
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  
  },
  methods: {
    imageLoad() {
            this.newRefresh()

    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DeailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,

    GoodList,

    Scroll,
  },
};
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 10;
  background: white;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 8;
  background: white;
}
.detail-param-info{
  position: relative;
  z-index: 10;
  background: white;
}
.detail-comment-info{
  position: relative;
  z-index: 10;
  background: white;
}
.detail-goods-info{
  position: relative;
  z-index: 10;
  background: white;
}
.good-lis{
  position: relative;
  z-index: 10;
  background: white;
}
.content {
  height: calc(100% - 44px);
}
</style>