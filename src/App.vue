<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
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
