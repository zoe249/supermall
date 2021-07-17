<template>
  <div class="tab-control"> 
      <div class="tab-control-item" 
      :class="{active:index === currentIndex}" 
      v-for="(item,index) in titles" 
      :key="index"
      @click="tabClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
           currentIndex :0  
        }
    },
    methods: {
      tabClick(index){
         this.currentIndex = index
         this.$emit('tabClick',index)
      }  
    }
}
</script>

<style lang="less" scoped>
.tab-control{
    display: flex;
    .tab-control-item{
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        span{
            padding-bottom: 5px;
        }
    }
    .active{
        color: #D4237A;
        span{
            border-bottom: 3px solid #D4237A;
        }
    }
}
</style>>

