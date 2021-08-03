<template>
  <div class="coast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    //     message:{
    //         type:String,
    //         default:' '
    //     },
    //     show:{
    //     type:Boolean,
    //     default:false
    // }
  },
  data() {
    return {
      message: " ",
      isShow: false,
    };
  },
  methods: {
    show(message='默认文字', duration=1500) {
        // console.log('nihao ')
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = " ";
      }, duration);
    },
  },
};
</script>

<style scoped>
.coast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 20px 35px;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  z-index: 999;
}
</style>