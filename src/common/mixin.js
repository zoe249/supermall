import { debounce } from '@/common/utils'

export const itemListenerMixin = {
    data() {
        return {
            ItemImgListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 200)

        this.itemImgListener = () => {
            this.newRefresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
        console.log('混入内容')
    }
}