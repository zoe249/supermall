<template>
    <div class="bottom-bar">
        <div class="check-content"  >
        <check-button 
                :is-checked="isSelectAll" 
                @click.native="checkClick"
                class="check-all"/>
        <span>全选</span>
        </div>

        <div class="price">
            合计：{{totalPrice}}
        </div>

        <div class="calculate" @click="calcClick">
            去结算({{checkLength}})
        </div>
    </div>
</template>

<script>
import CheckButton from '@/components/context/checkButton/checkButton'

import {mapGetters} from 'vuex'
export default {
    components: {
        CheckButton
    },
    methods: {
      checkClick(){
          if(this.isSelectAll){ //全部选中
              this.cartList.forEach(item => item.checked = false)
          }else{                    //部分或全部不选中
              this.cartList.forEach(item => item.checked = true)
          }
        // this.cartList.forEach(item => item.checked = !this.isSelectAll)
      }  ,
      calcClick(){
          if(!this.isSelectAll){
            //   this.$toast.show('请选择购买的商品',2000)
          }
      }
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice(){
            return '￥'+this.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price*item.count
            },0)
        },
        checkLength(){
            return  this.cartList.filter(item=> item.checked).length
        },

        isSelectAll(){
            if(this.cartList.length === 0) return false
            // 使用filter
            // return !(this.cartList.filter(item=>!item.checked).length)
            
            // 使用find
            // return !this.cartList.find(item=>!item.checked)

            // 普通遍历
            let isChecked = false
            for(let item of this.cartList){
                if(!item.checked){
                    // isChecked = false
                    return isChecked
                }
            }
            return true
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        
        height: 40px;
        /* background: tomato; */
        position: relative;
        /* bottom: 40px; */
        display: flex;
        align-items: center;
    }
    .check-content{
        display: flex;
        margin-left: 5px;
        align-items: center;
        width: 80px;
    }
    .check-all{
        margin: 0 5px;
        height: 20px;
        width: 20px;
        font-weight: 600;
    }
    .price{
        margin-left:50px ;
        flex: 1;
    }
    .calculate{
        /* float: right; */
        height: 40px;
        line-height: 40px;
        background: rgb(236, 78, 78);
        color: #fff;
        width: 90px;
        text-align: center;
    }
</style>