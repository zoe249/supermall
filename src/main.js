import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'

import VuelazyLoay from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
    // Vue.prototype.$toast = new Vue()

// 安装toast插件
Vue.use(toast)

// 懒加载
Vue.use(VuelazyLoay, {
    loading: require('./assets/img/loading/loading.gif')
})
new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app')

require('./assets/css/base.css')