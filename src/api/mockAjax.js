//对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式 
import 'nprogress/nprogress.css'
let requests = axios.create({
    //基础路径:发请求的时候，路径当中会出现api
    baseURL: "/mock",
    //请求不能超过5S
    timeout: 5000,
})
//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
    //可以让进度条开始动
    nprogress.start();
    //现在的问题是config是什么?配置对象
    return config;

});
//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
    (res) => {
        // 成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，做一些事情
        //进度条结束
        nprogress.done();
        //相应成功做的事情
        return res.data;
    },
    (err) => {
        alert("服务器响应数据失败");
    }
);
//这里的代码是暴露一个axios实例
export default requests;