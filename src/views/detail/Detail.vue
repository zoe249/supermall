<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav" />

    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <deail-shop-info :shop="shop" class="deail-shop-info" />
      <detail-goods-info
        :detailInfo="detailImages"
        @imageLoad="imageLoad"
        class="detail-goods-info"
      />
      <detail-param-info
        ref="params"
        :paramInfo="paramInfo"
        class="detail-param-info"
      />
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
        class="detail-comment-info"
      />
      <good-list ref="recommend" :goods="recommend" class="good-lis" />
    </scroll>

    <detail-bottom-bar class="detail-bottom-bar" @addCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShowBackTop" class="back-top" />
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DeailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Toast from  '@/components/common/toast/toast.vue'
import GoodList from "@/components/context/goods/goodsList.vue";
import { itemListenerMixin, backTopMixin } from "@/common/mixin";

import { mapActions } from "vuex";

import Scroll from "@/components/common/scroll/Scroll.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail";
import { debounce } from "@/common/utils";
export default {
  name: "Detail",
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImages: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      message:'',
      show:false
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
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 监听详情加载完
    });

    getRecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
    // 给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    }, 1000);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },

    // 监听滚动的位置
    contentScroll(position) {
      // 1.获取Y值
      const positionY = -position.y;
      // console.log(positionY)
      // position中的y与主题y做比较
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY > this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY > this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          //  console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.listenShoBackTop(position);

      //  topback是否显示
    },
    // 1.添加购物车需要的数据
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      console.log(product);
      // this.$store.cartList.push(product)
      // 2.将商品添加到购物车(1.Promise 2.mapActions)
      this.addCart(product).then((res) => {
        this.show = true 
        this.message = res
        // console.log(res);

        setTimeout(()=>{
          this.show = false
        },1500)
      });

      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res)
      // })
    },

    //商品添加到购物车
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DeailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    GoodList,
    Toast,

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
.detail-param-info {
  position: relative;
  z-index: 10;
  background: white;
}
.detail-comment-info {
  position: relative;
  z-index: 10;
  background: white;
}
.detail-goods-info {
  position: relative;
  z-index: 10;
  background: white;
}
.good-lis {
  position: relative;
  z-index: 10;
  background: white;
}
.content {
  height: calc(100% - 102px);
}
.detail-bottom-bar {
}
.back-top {
  position: absolute;
}
</style>