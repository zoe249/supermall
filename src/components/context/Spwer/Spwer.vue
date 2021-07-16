<template>
  <div>

      
          <div
      class="banners"
      v-for="(item, index) in banners"
      :key="index"
      v-show="setIntx == index"
    >
      <img :src="item.image" alt="" @mousemove="clearGo" @mouseleave="go" />
      <ul class="spwer-index">
        <li v-for="(v, i) in banners" :key="i"></li>
        <!-- :class=" setInt == i? 'active':''" -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
data () {
    return {
        setIntx: 0,
      interId: null,
    }
},
created () {
  this.go();
},
methods: {
  
  go() {
      this.interId = setInterval(() => {
        this.setIntx++;
        if (this.setIntx == this.banners.length) {
          this.setIntx = 0;
        }
      }, 1000);
    },
    clearGo() {
      clearInterval(this.interId);
    },
}
}
</script>

<style scoped>
.banners {
  width: 365px;
  height: 175px;
  /* overflow: hidden; */
  margin: 3px 5px;
  position: relative;
}
.banners .spwer-index {
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 148px;
}
.banners .spwer-index .active {
  color: #ccc;
}
.banners .spwer-index li {
  list-style-type: none;
  height: 7px;
  margin: 0 5px;
  border-radius: 50%;
  width: 7px;
  background: #fff;
  float: left;
}
.banners img {
  width: 100%;
  height: 100%;
}
</style>