<template>
  <div class="category-right">
      <scroll class="content">
          <div class="right-item" v-for="(item,index) in RightList" :key="index">
          <img v-lazy="item.image" alt="">
      </div>
      </scroll>
      
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
export default {
  props: {
    RightList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data () {
      return {
         
      }
  },
  created () {
      this.list = this.RightList,
      console.log(this.list)
  },
  components: {
      Scroll
  }
};
</script>

<style scoped>
.category-right {
    /* z-index: -9; */
  position: absolute;
  top: 44px;
  left: 75px;
   height: calc(100vh - 49px - 44px);
   /* padding-bottom: 49px; */
}
.content{
    height: 100vh
}
.right-item{
    /* background: blueviolet; */
    width: calc(100vw - 75px);
    margin: 10px;
    height: 80px;
    width: 80px;
    float: left;
   
}
.right-item img{
    height: 80px;
    width: 80px;
     flex: 1;
}
</style>