// 引入组件
import Home from '../pages/Home/index.vue';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '../pages/Detail/index.vue';
import AddCartSuccess from '../pages/AddCartSuccess/index.vue';
import ShopCart from '../pages/ShopCart/index.vue';
export default [
    //    重定向
    {
        path: '/',
        component: Home,
        redirect: 'home'
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            show: true
        }
    }, {
        name: 'search', // 是当前路由的标识名称
        path: '/search/:keyword?',
        component: Search,
        meta: {
            show: true
        },
        // 将params参数和query参数映射成属性传入路由组件
        props: (route) => ({
            keyword: route.params.keyword
        })
    }, {
        path: '/login',
        component: Login,
        meta: {
            show: false
        }
    }, {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    }, {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: true
        }
    },{
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },{
        path: '/shopcart',
        name:'shopcart',
        component: ShopCart,
        meta: {
            show: true
        }
    }
]