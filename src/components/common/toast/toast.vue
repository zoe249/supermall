<template>
  <div class="coast" v-show="show">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    props: {
        message:{
            type:String,
            default:' '
        },
        show:{
        type:Boolean,
        default:false
    }
    },
    
}
</script>

<style scoped>
.coast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px 35px;
    transform: translate(-50%,-50%);
    color: #fff;
    background-color:rgba(0,0,0,.7) ;
    border-radius: 20px;
}
</style>