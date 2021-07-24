<template>
  <div class="check-button" :class="{check:isChecked}">
      <img  src="@/assets/img/cart/Tick(1).svg" alt="">
      <img class="img-true" v-if="isChecked" src="@/assets/img/cart/Tick.svg" alt="">
  </div>
</template>

<script>
export default {
    props: {
        isChecked:{
            type:Boolean,
            default:false,
        }
    },
    data () {
        return {
        }
    },
}
</script>

<style scoped>
    .check-button{
        height: 20px;
        width: 20px;
        position:relative;
        display: flex;
    }
    .check-button img{
        height: 100%;
        width: 100%;
       
    }
    .img-true{
        height: 100%;
        width: 100%;
        position: absolute;
        top: -50;

    }
    .check{
        border: red;
    }
</style>