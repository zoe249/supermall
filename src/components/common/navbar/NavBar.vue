<template>
  <div id="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        /* position:fixed; */
    }
    .left,.right{
        width: 60px;
        /* background: powderblue; */
    }
    .center{
        flex: 1;
        /* background: pink; */
        text-align: center;
    }
</style>