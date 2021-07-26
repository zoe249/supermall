<template>
  <div class="category-left">
      <scroll class="content">
      <div class="category-item" 
            v-for="(item,index) in LeftList" 
            :key="index"
            @click="clickItem(index,item.maitKey)"
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
        clickItem(index,key){
            console.log(key)
            this.currentIndex = index

            this.$emit('clickRight',key)
        }
    },
    components: {
        Scroll
    }
}
</script>

<style scoped>
    .category-left{
        padding-top:44px ;
        display:flow-root;
        width: 20%;
        /* flex: 0.2; */
        height: calc(100vh - 49px - 44px);
    }
    .category-item{
        flex: 0.2;
        display: flex;
        flex-flow:column;
        height: 40px;
        background: #FFC0CB;
        margin-bottom:1px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        justify-content: space-between;
    }
    .content{
        height: calc(100vh - 49px - 44px);
        overflow: hidden;
    }
    .index{
        background: white;
        color: #FF8E96
    }
</style>