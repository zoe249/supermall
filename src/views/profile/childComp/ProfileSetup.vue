<template>
  <div class="profile-setup">
      <div class="setup">
          <div class="img"><img src="@/assets/img/profile/message.svg" alt=""></div>
          <span>我的消息</span>
      </div>
      <div class="setup">
          <div class="img"><img src="@/assets/img/profile/integral.svg" alt=""></div>
          <span>积分商城</span>
      </div>
      <div class="setup">
          <div class="img"><img src="@/assets/img/profile/VIP.svg" alt=""></div>
          <span>会员尊享</span>
      </div>
      <div class="setup">
          <div class="img"><img src="@/assets/img/profile/cart.svg" alt=""></div>
          <span>购物车</span>
      </div>
      <div class="setup">
          <div class="img"><img src="@/assets/img/profile/dowload.svg" alt=""></div>
          <span>下载APP</span>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            messageList:[
                {
                    img:"../../../assets/img/profile/message.svg",
                    message:"我的消息"
                },
                {
                    img:"../../../assets/img/profile/integral.svg",
                    message:"积分商城"
                },
                {
                    img:"../../../assets/img/profile/VIP.svg",
                    message:"会员尊享"
                },
                {
                    img:"../../../assets/img/profile/cart.svg",
                    message:"购物车"
                },
                {
                    img:"../../../assets/img/profile/dowload.svg",
                    message:"下载APP"
                },
                
            ]
        }
    }
}
</script>

<style scoped>
    .setup{
        padding-left:10px ;
        padding-top:10px ;
        display: flex;
        height: 50px;
    }
    .img{
        height: 25px;
        width: 25px;
    }
    .setup>.img>img{
        height: 100%;
    }
    .setup>span{
        margin-left: 5px;
        flex: 1;
        height: 25px;
        line-height: 25px;
        border-bottom:1px solid #ccc ;
    }
</style>