import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../views/home/Home.vue')
const Categroy = () =>
    import ('../views/category/Category.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Detail = () =>
    import ('../views/detail/Detail.vue')


Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/Home'
    }, {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/detail/:iid',
        component: Detail,
        meta: {
            title: '详情'
        }
    },
    {
        path: '/category',
        component: Categroy,
        meta: {
            title: '分类'
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            title: '购物车'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '我的'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // ${//to and from are Route Object,next() must be called to resolve the hook}
    if (to.meta.title) {
        document.title = to.matched[0].meta.title
    }
    // console.log('前置钩子')
    next()

})


export default router