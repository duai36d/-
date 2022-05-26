import {
    reqgetCategoryList,
    reqGetBannerList,
    reqFloorList
} from '../api/index.js'
export default {
    // namespaced: true,
    state: {
        // state中默认初始值不能乱写，服务器返回对象，数组。【根据接口返回值初始化】
        categoryList: [],
        //轮播图的数据
        bannerList: [],
        floorList: []
    },
    mutations: {
        GETCATEGORYLIST(state, value) {
            state.categoryList = value.slice(0, 15)
        },
        GETBANNERLIST(state, value) {
            state.bannerList = value
        },
        GETFLOORLIST(state, value) {
            state.floorList = value
        },
    },
    actions: {
        // 通过api里面的接口函数调用向服务器发请求，获取服务器数据
        async getCategoryList() {
            let res = await reqgetCategoryList()
            if (res.code == 200) {
                this.commit('GETCATEGORYLIST', res.data)
            }
            // console.log(res);
        },
        //获取首页轮播图的数据
        async getBannerList() {
            let result = await reqGetBannerList();
            if (result.code == 200) {
                this.commit("GETBANNERLIST", result.data);
            }
        },
        // 获取floor数据
        async getFloorList() {
            let result = await reqFloorList();
            if (result.code = 200) {
                this.commit("GETFLOORLIST", result.data)
            }
        },
    }
}