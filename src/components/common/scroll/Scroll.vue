<template>
<!-- ref/children -->
  <div class="wrapper" ref="wrapper">
     <div class="content">
          <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: {
        probeType:{
            type:Number,
            default:0
        },
    
    },
    data () {
        return {
            scroll:null      
        }
    },
    mounted () {
        // 1.创建BScroll
        this.scroll = new  BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
                
                
        })


        // 2.监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
            this.$emit('scroll',position)
            // console.log(this.scroll)
        })
        // 3.监听上拉事件

       
    },
    methods: {
        scrollTo(x,y,time=500){
        this.scroll && this.scroll.scrollTo(x,y,time)
        },

        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
           this.scroll && this.scroll.refresh()
           console.log('aaa')
        }
    }
}
</script>

<style scoped>

</style>>
