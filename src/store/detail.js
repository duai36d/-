import {
    reqGoodsInfo,
    reqAddOrUpdateShopCart
} from '../api/index.js'
//封装游客身份模块nanoid--->生成一个随机字符串（不能在变了）
import{getNNID}from "../utils/nanoid_token"
export default {
    state: {
        goodInfo: {},
        // 游客的临时身份
        nanoid_token:getNNID(),
    },
    mutations: {
        GETGOODINFO(state, value) {
            state.goodInfo = value
        }
    },
    actions: {
        //获取产品信息的action
        async getGoodInfo({
            commit
        }, skuId) {
            let result = await reqGoodsInfo(skuId);
            if (result.code == 200) {
                commit("GETGOODINFO", result.data);
            }
        },
        //加入购物车的||修改某一个产品的个数
        async addOrUpdateShopCart({ commit },{skuId,  skuNum}) {
            //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
            //不需要在三连环（仓库存储数据了）
            //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
            let result = await reqAddOrUpdateShopCart(skuId, skuNum);
            if (result.code == 200) {
                //返回的是成功的标记
                return "ok";
            } else {
                //返回的是失败的标记
                return Promise.reject(new Error("faile"));
            }
        }
    },
    getters: {
        //比如:state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
        //当前计算出的 categoryView属性值至少是一个空对象，假的报错不会有了。
        categoryView(state) {
            return state.goodInfo.categoryView || {};
        },
        //简化产品信息的数据
        skuInfo(state) {
            return state.goodInfo.skuInfo || {};
        },
        //产品售卖属性的简化
        spuSaleAttrList(state) {
            return state.goodInfo.spuSaleAttrList || []
        }
    }
}