<template>
<div class="profile">
    <nav-bar class="profile-nav"><div slot="center">个人</div></nav-bar>
    <profile-user/>

    <profile-money/>

    <profile-setup/>
</div>
    
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'

import ProfileUser from './childComp/ProfileUser.vue'
import ProfileMoney from './childComp/ProfileMoney.vue'
import ProfileSetup from './childComp/ProfileSetup.vue'

export default {
    components: {
      Scroll,
      NavBar,

      ProfileUser,
      ProfileMoney,
      ProfileSetup
    }
}
</script>

<style scoped>
.profile{

}
.profile-nav{
  background: #FF7891;
  color: white;
  font-weight: 900;
}
</style>