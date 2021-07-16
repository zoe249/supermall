<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" :class="{ active: isActive }"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor:{
        type:String,
        default:'red'
    }
  },
  data() {
    return {
    //   isActive: true,
    };
  },
  computed: {
    isActive(){
        // return this.$route.path.indexOf(this.path)!==-1
        return this.$route.path == this.path
    },
    activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path) {
        this.$router.replace(this.path);
        console.log(this.$route.path.indexOf());
      }
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  
}
</style>