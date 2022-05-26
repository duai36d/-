import Vue from 'vue'
import Vuex from 'vuex';
// 引入小仓库
import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';
import user from './user';
// 使用插件
Vue.use(Vuex)
// 对外暴露
export default new Vuex.Store({
    // 实现Vue模块化开发存储数据
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
    }
});
/*
state:仓库储存数据的地方
mutations:修改state的唯一手段
actions:处理actions,可以书写自己的业务逻辑,也可以处理异步
getters:理解为计算属性,用于简化仓库数据,让组件或去仓库的数据更加方便
*/