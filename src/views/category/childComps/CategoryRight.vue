<template>
  <div class="category-right">
    <scroll class="content" 
      @scroll="contentScroll"
      :probe-type="3"
      ref="scroll"
      >
      <div class="image-item">
        <div
          class="right-item"
          v-for="(item, index) in RightList"
          :key="index"
          @click="ClickLink(item.link)"
        >
          <div class="img"><img v-lazy="item.image" alt="" /></div>
          <span class="item-title">{{ item.title }}</span>
        </div>
      </div>
      <!-- tab -->
      <tab-control :titles="['综合', '新品', '销量']"
       @tabClick="clickTitle"/>
      <goods-list  :goods="detaList"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import TabControl from "@/components/context/TabControl/TabControl.vue";
import GoodsList from "@/components/context/goods/goodsList.vue";
import backTop from '@/components/context/backTop/BackTop.vue'

import {backTopMixin} from '@/common/mixin'
export default {
  mixins: [backTopMixin],
  props: {
    RightList: {
      type: Array,
      default() {
        return [];
      },
    },
    detaList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isShowBackTop:true,
      currentType:'pop'
    };
  },
  created() {
    this.list = this.RightList;
    // console.log(this.list);
  },
  methods: {
    ClickLink(link) {
      window.location.href = link;
    },

    // 点击切换
    clickTitle(index){
      console.log(index)
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
      this.$emit('tabType',this.currentType)
    },
    // 监听滑动
    contentScroll(position){
        // console.log(position)
        // if(position.y<-1000){
        //   this.isShowBackTop =  true
        // }else{
        //   this.isShowBackTop =  false
        // }
        this.listenShoBackTop(position)
    },
    // 返回顶部
    // backTop(){
    //    this.$refs.scroll.scrollTo(0, 0, 1000)
    // }
  },
  components: {
    Scroll,
    TabControl,
    GoodsList,
    backTop
  },
};
</script>

<style scoped>
.category-right {
  height: 100vh;
  width: 80vw;
}
.content {
  height: calc(100% - 49px - 44px);
  width: 100%;
}
.image-item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.right-item {
  flex: 1;
  margin: 5px;
  height: 120px;
  width: 100px;
  /* display: flex;
  flex-direction: column;
  align-content: flex-start; */
  /* position: relative; */
}
.img {
  width: 100%;
  height: 80px;
}
.right-item img {
  height: 80px;
  width: 80px;
  margin-bottom: 5px;
}
.item-title {
  margin-top: 10px;
  width: 80px;
  text-align: center;
  position: absolute;
}
</style>