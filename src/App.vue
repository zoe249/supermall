<template>
  <div id="app">
    <router-view></router-view>
   <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/context/MainTabBar/MainTabBar.vue'
export default {
  name:'App',
  components: {
    MainTabBar
  }
}
</script>

<style lang="less">


</style>
