<template>
  <div class="profile-money">
      <div class="price">
          <div class="first-row">
              <span class="number">0.00</span>
              <p>元</p>
          </div>
          <span>我的余额</span>
      </div>
     <div class="price">
          <div class="first-row">
              <span class="number">0</span>
              <p>个</p>
          </div>
          <span>我的优惠</span>
      </div>
     <div class="price">
          <div class="first-row">
              <span class="number">0</span>
              <p>分</p>
          </div>
          <span>我的积分</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-money{
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}
.price>span{
    font-size: 15px;
}
.price>.first-row>.number{
    font-size: 30px;
    font-weight: 900;
    color:#F7543B;
}
.price>.first-row>p{
    font-size: 13px;
    line-height: 45px;
}
.first-row{
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}
</style>