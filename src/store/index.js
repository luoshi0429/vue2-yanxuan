import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import {
  getShowCommodityDetail,
  getShowCartCommodity
} from '@/utils/storage'
Vue.use(Vuex)

const initialState = {
  userInfo: null, // 用户信息
  cartList: [], // 购物车的商品
  removeCartList: [],
  cartIsEdit: false,
  currentCartCommodity: getShowCartCommodity(), // 点击选择规格的商品
  showCommodityDetail: getShowCommodityDetail(),
  selectFormat: {} // 选好规格，未加入到购物车
}

export default new Vuex.Store({
  state: initialState,
  actions,
  mutations,
  getters
})
