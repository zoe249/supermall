<template>
  <div class="category-left">
      <scroll class="content">
      <div class="category-item" 
            v-for="(item,index) in LeftList" 
            :key="index"
            @click="clickItem(index,item.maitKey,item.miniWallkey)"
            :class="{index:index === currentIndex}"
            >
            {{item.title}}
        </div>
      </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";

export default {
    props:{
        LeftList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
            currentIndex:0  
        }
    },
    methods: {
        clickItem(index,key,miniWallkey){
            console.log(miniWallkey)
            this.currentIndex = index
            this.$emit('clickRight',key,miniWallkey)
        }
    },
    components: {
        Scroll
    }
}
</script>

<style scoped>
    .category-left{
        height: 100vh;
    }
    .content{
        /* height: 100vh; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - 49px - 44px);
    }
    .category-item{
        /* flex: 1; */
        height: 45px;
        font-size: 13px;
        font-weight: 600;
        background: #F7F5F8;
        line-height: 45px;
        text-align: center;
    }
    .index{
        background: white;
        color: #FF8E96;
        border-left: 3px solid #FF8E96;
    }
</style>