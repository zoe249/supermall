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

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/Home'
    }, {
        path: '/home',
        component: Home,
        nem: Home,
        mate: {
            title: '首页'
        }
    },
    {
        path: '/category',
        component: Categroy,
        mate: {
            title: '首页'
        }
    },
    {
        path: '/cart',
        component: Cart,
        mate: {
            title: '首页'
        }
    },
    {
        path: '/profile',
        component: Profile,
        mate: {
            title: '首页'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     // ${//to and from are Route Object,next() must be called to resolve the hook}
//     if (to.mate.title) {
//         document.title = to.mete.title
//     }
//     next()

// })

export default router