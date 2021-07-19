<template>
  <div id="detail">
      <detail-nav-bar/>
      <h1>{{iid}}</h1>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'

export default {
    data () {
        return {
            iid:null
        }
    },
    mounted () {
        this.iid = this.$route.params.iid
    },
    components: {
        DetailNavBar
    }
}
</script>

<style>

</style>