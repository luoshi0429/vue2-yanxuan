import * as TYPES from './mutation-types'
import { getCartCommodityFromLocalStorage } from '@/utils/storage'

export default {
  getCartCommodity ({ commit }) {
    // TODO: 判断是否登录，登录的从服务器获取数据，否则直接从本地获取
    commit(TYPES.SETCARTCOMMODITY, getCartCommodityFromLocalStorage())
  },
  addToCart ({ commit }, commodity) {
    commit(TYPES.ADDTOCART, commodity)
  },
  showCommodityDetail ({ commit }, commodity) {
    commit(TYPES.SHOWCOMMODITYDETAIL, commodity)
  },
  changeSelectFormat ({ commit }, data) {
    commit(TYPES.CHANGESELECTFORMAT, data)
  },
  selectCartCommodity ({ commit }, commodity) {
    // TODO: 判断是否登录，登录的发送请求
    commit(TYPES.SELECTCARTCOMMODITY, commodity)
  },
  selectAllCartCommodity ({ commit }) {
    commit(TYPES.SELECTALLCARTCOMMODITY)
  },
  getRemoveCartCommodity ({ commit }, commodity) {
    commit(TYPES.GETREMOVECARTCOMMODITY, commodity)
  },
  removeCartCommodity ({ commit }, commodities) {
    commit(TYPES.REMOVECARTCOMMODITY, commodities)
  },
  selectRemoveAllCartCommodity ({ commit }, selected = false) {
    commit(TYPES.SELECTREMOVEALLCARTCOMMODITY, selected)
  },
  changeCartCommodity ({ commit }, data) {
    console.log(data)
  },
  pushToCartFormat ({ commit }, commodity) {
    commit(TYPES.PUSTCARTFORMAT, commodity)
  },
  changeCartEdit ({ commit }, edit) {
    commit(TYPES.CHANGECARTEDIT, edit)
  },
  changeRemoveCartCommodity ({ commit }, changeData) {
    commit(TYPES.CHANGEREMOVECARTCOMMODITY, changeData)
  },
  resetCartCommodity ({ commit }) {
    commit(TYPES.RESETCARTCOMMODITY)
  },
  finishEditCartCommodity ({ commit }) {
    commit(TYPES.FINISHEDITCARTCOMMODITY)
  }
}
