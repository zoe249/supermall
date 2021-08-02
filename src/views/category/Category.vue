<template>
  <div class="category">
    <!-- 顶部导航 -->
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
         <category-left class="left"  :LeftList="LeftList" @clickRight="clickRight" />

          <category-right class="right" :RightList="rightList" :detaList="detaList"/>  
    </div>
   
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";


import CategoryLeft from "./childComps/CategoryLeft.vue";
import CategoryRight from "./childComps/CategoryRight.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";

import { getCotegory, getCotegoryRight, getCategoryDetail } from "@/network/cotegory";
export default {
  data() {
    return {
      LeftList: [],
      key: "3627",
      rightList:[],
      miniWallkey:"10062603",
      detaList:[]
    };
  },
  created() {
    this.getCotegory();
    this.getCotegoryRight();
    this.getCategoryDetail(this.miniWallkey);
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
        // console.log(res)
      });
    },
    //  获取右侧列表
    clickRight(key,miniWallkey) {
      this.key = key;
      this.miniWallkey = miniWallkey;
      console.log(this.miniWallkey)
      // 获取商品图片
      this.getCotegoryRight(this.key);

      // 获取商品详细信息
      this.getCategoryDetail(this.miniWallkey)
    },
    getCotegoryRight(key) {
      getCotegoryRight(key).then((res) => {
        this.rightList = res.data.data.list
        console.log(this.rightList);
      });
    },
    getCategoryDetail(miniWallkey){
      getCategoryDetail(miniWallkey).then(res =>{
        this.detaList = res.data
        console.log(this.detaList)
      })
    }
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
.category-nav {
    position: absolute;
    left: 0;
    right: 0;
  background: #FF7891;
  color: white;
  font-weight: 900;
  z-index: 999;
}
.content{
  display: flex;
  padding-top: 44px;
}
.left{
  width: 75px;
}
.right{
  
}
/*  */
</style>