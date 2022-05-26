import Vue from 'vue'
import Router from 'vue-router'
// 使用插件
Vue.use(Router)
import routes from "./routes"
//引入store
import store from "../store";
// 配置路由
let router = new Router({
    // 配置路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return {
            y: 0
        }
    },
});
/*全局守卫：前置守卫，（（保安，看大门的保安）在路由跳转在之前进行判断）
  to：去哪 from：到哪 next：准许放行
  to:获取到要跳转到的路由信息
  from：获取到从哪个路由跳转过来来的信息
  next: next() 放行  next(path) 放行  
  方便测试 统一放行
  next();
*/
router.beforeEach(async (to, from, next) => {
    // 用户登陆了，才会有token，未登录一定不会有token
    //获取仓库中的token-----可以确定用户是登录了
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name
    //用户登录了
    if (token) {
        //已经登录而且还想去登录------不行
        if (to.path == "/login" || to.path == "/register") {
            next('/home')
        } else {
            //已经登陆了,访问的是非登录与注册
            //登录了且拥有用户信息放行
            if (name) {
                next()
            } else {
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效从新登录
                    await store.dispatch('userLogout');
                    next('/login')
                }
            }
        }
    } else {
        next()
    }

})
export default router