<template>
  <div class="category">
    <!-- 顶部导航 -->
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>

    <category-left  :LeftList="LeftList" @clickRight="clickRight" />

    <category-right :RightList="rightList"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CategoryLeft from "./childComps/CategoryLeft.vue";
import CategoryRight from "./childComps/CategoryRight.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";

import { getCotegory, getCotegoryRight } from "@/network/cotegory";
export default {
  data() {
    return {
      LeftList: [],
      key: "3627",
      rightList:[]
    };
  },
  created() {
    this.getCotegory();
    this.getCotegoryRight();
  },
  mounted() {
    // this.scroll =   new BScroll(document.querySelector('.wrapper'),{
    //     probeType:2,
    //     pullUpLoad:true
    // })
    // this.scroll.on('scroll',(position)=>{
    //     console.log(position)
    // })
    // this.scroll.on('pullingUp',()=>{
    //     console.log('加载')
    // })
  },
  methods: {
    //   获取左侧列表
    getCotegory() {
      getCotegory().then((res) => {
        this.LeftList = res.data.data.category.list;
        console.log(this.LeftList);
      });
    },
    //  获取右侧列表
    clickRight(key) {
      this.key = key;
      this.getCotegoryRight(this.key);
    },
    getCotegoryRight(key) {
      getCotegoryRight(key).then((res) => {
        this.rightList = res.data.data.list
        console.log(this.rightList);
      });
    },
  },
  components: {
    NavBar,
    CategoryLeft,
    CategoryRight,

    Scroll,
  },
};
</script>

<style scoped>
/* .wrapper{
        height: 150px;
        background: coral;
        overflow: hidden;
    } */
.category {
  /* padding-bottom: 49px; */
}

.category-nav {
    position: absolute;
    left: 0;
    right: 0;
  background: pink;
  color: white;
  font-weight: 900;
  z-index: 999;
}
/*  */
</style>