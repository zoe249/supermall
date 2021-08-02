<template>
  <div class="profile-user">
      <div class="pic">
          <img src="@/assets/img/profile/girl.svg" alt="">
      </div>
      <div class="title">
          <span class="load">登录/注册</span>
          <div class="phone">
              <span class="img"><img src="@/assets/img/profile/phone.svg" alt=""></span>
              <span>暂无绑定手机号</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-user{
    background: #FF7891;
    height: 85px;
    width: 100vw;
    
}
.pic{
    margin-right: 15px;
    float: left;
    margin-left: 10px;
    width: 70px;
    height: 70px;
}
.pic img{
    height: 100%;
}
.title{
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
    color: white;
}
.load{
    font-size: 18px;
    font-weight:600;
    margin-bottom: 3px;
}
.phone{
    height: 20px;
}
.phone img{
    position: relative;
    top: 5px;
    height: 100%;
}
</style>