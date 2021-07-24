<template>
  <div id="detil-nav-bar">
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="../../../assets/img/common/back.svg" alt="">
        </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        :key="index" 
        class="title-item"
        :class="{active:index === currentIndex}"
        @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods: {
    titleClick(index){
      // console.log(index)
        this.currentIndex = index
        this.$emit('titleClick',index)
    }  ,
    backClick(){
        this.$router.go(-1)
    }
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active{
    color: coral;
}
.back img{
    margin-top: 10px;
    margin-left: 20px;
}
</style>