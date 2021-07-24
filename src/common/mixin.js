import { debounce } from '@/common/utils'
import BackTop from "@/components/context/backTop/BackTop.vue";

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
            // console.log('混入内容')
    }
}

export const backTopMixin = {

    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 1000)
        },
        listenShoBackTop(position) {
            this.isShowBackTop = -position.y > 1000
        }
    }
}