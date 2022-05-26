import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
//引入MockServer.js----mock数据
import "./mock/mockServe";
import 'swiper/css/swiper.css'
// import Carsousel from "./components/Carousel/index.vue";
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
// import TypeNav from './pages/Home/TypeNav/index.vue'
//全局组件：第一个参数 组件名字  第二个参数：那个组件
// Vue.component(TypeNav.name, TypeNav);
// Vue.component(Carsousel.name, Carsousel);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 引入Store仓库
  //在每一个组件的身上都拥有一个$store这个属性
  store,
  // 注册路由
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,

}).$mount('#app')