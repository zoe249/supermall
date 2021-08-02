<template>
  <div class="category-right">
    <scroll class="content">
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
      <tab-control :titles="['精品', '潮流', '热卖']" />
      <goods-list  :goods="detaList"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import TabControl from "@/components/context/TabControl/TabControl.vue";
import GoodsList from "@/components/context/goods/goodsList.vue";
export default {
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
    return {};
  },
  created() {
    this.list = this.RightList, 
    console.log(this.list);
  },
  methods: {
    ClickLink(link) {
      window.location.href = link;
    },
  },
  components: {
    Scroll,
    TabControl,
    GoodsList,
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