import * as TYPES from './mutation-types'
import Vue from 'vue'
import {
  saveShowCommodityDetail,
  savCartCommodityrToLocalStorage,
  saveShowCartCommodity,
  getCartCommodityFromLocalStorage
} from '@/utils/storage'
export default {
  [TYPES.ADDTOCART] (state, commodity) {
    const count = commodity.count
    const pId = commodity.pId
    // 返回在数组中的索引。返回-1，不包含
    const newCartIndex = state.cartList.findIndex((cart) => {
      return cart.pId === pId && cart.selectString === commodity.selectString
    })
    if (newCartIndex === -1) {
      const cartCommodity = {
        pId: pId,
        title: commodity.title,
        price: commodity.price,
        pic: commodity.pic,
        selected: true,
        count: count,
        formats: commodity.formats,
        selectString: commodity.selectString
      }
      state.cartList.push(cartCommodity)
    } else {
      state.cartList[newCartIndex].count += count
    }
    state.cartCommodityCount += count
    savCartCommodityrToLocalStorage(state.cartList)
  },
  [TYPES.REMOVEFROMCART] (state, data) {

  },
  [TYPES.CHANGESELECTFORMAT] (state, data) {
    // 以新对象替换老对象使用使用前一种方法无效
    // state.selectFormat[data.pId] = data.format
    state.selectFormat = Object.assign({}, state.selectFormat, {
      [data.pId]: { format: data.format, count: data.count }
    })// { ...state.selectFormat, [data.pId]: { format: data.format, count: data.count } }
  },
  [TYPES.SHOWCOMMODITYDETAIL] (state, commodity) {
    state.showCommodityDetail = commodity
    saveShowCommodityDetail(commodity)
  },
  [TYPES.SETCARTCOMMODITY] (state, commodities) {
    state.cartList = commodities
  },
  [TYPES.SELECTCARTCOMMODITY] (state, commodity) {
    const index = state.cartList.indexOf(commodity)
    if (index === -1) return
    Vue.set(state.cartList, index, { ...commodity, selected: !commodity.selected })
  },
  [TYPES.SELECTALLCARTCOMMODITY] (state) {
    // 全选 => 全不选。 一个或一个以上选择 => 全选
    const selectCount = state.cartList.filter(c => c.selected).length
    if (selectCount === state.cartList.length) {
      const newCartList = state.cartList.map(c => {
        return Object.assign({}, c, { selected: false })
      })
      state.cartList = newCartList
    } else {
      const newCartList = state.cartList.map(c => {
        return Object.assign({}, c, { selected: true })
      })
      state.cartList = newCartList
    }
  },
  [TYPES.GETREMOVECARTCOMMODITY] (state, commodity) {
    const index = state.removeCartList.indexOf(commodity)
    if (index === -1) {
      state.removeCartList.push(commodity)
    } else {
      state.removeCartList.splice(index, 1)
    }
  },
  [TYPES.SELECTREMOVEALLCARTCOMMODITY] (state, selected) {
    if (!selected) {
      state.removeCartList = []
    } else {
      console.log('cart list: ', state.cartList)
      state.removeCartList = Object.assign([], state.cartList)
    }
  },
  [TYPES.REMOVECARTCOMMODITY] (state, commodities) {
    let cartCommodities = Object.assign([], state.cartList)
    let removeCartList = Object.assign([], state.removeCartList)
    commodities.forEach((c, i) => {
      const index = cartCommodities.indexOf(c)
      cartCommodities.splice(index, 1)
      const removeIndex = removeCartList.indexOf(c)
      removeCartList.splice(removeIndex, 1)
    })
    state.cartList = cartCommodities
    state.removeCartList = removeCartList
    savCartCommodityrToLocalStorage(cartCommodities)
  },
  [TYPES.PUSTCARTFORMAT] (state, commodity) {
    state.currentCartCommodity = commodity
    saveShowCartCommodity(commodity)
  },
  [TYPES.CHANGECARTEDIT] (state, edit) {
    state.cartIsEdit = edit
  },
  [TYPES.CHANGEREMOVECARTCOMMODITY] (state, changeData) {
    const currentCartCommodity = state.currentCartCommodity
    const newCommodity = Object.assign({}, currentCartCommodity, changeData)
    const index = state.cartList.indexOf(currentCartCommodity)
    const removeIndex = state.removeCartList.indexOf(currentCartCommodity)
    Vue.set(state.cartList, index, newCommodity)
    removeIndex >= 0 && (Vue.set(state.removeCartList, index, newCommodity))
    state.currentCartCommodity = newCommodity
    saveShowCartCommodity(newCommodity)
  },
  [TYPES.RESETCARTCOMMODITY] (state) {
    state.cartList = getCartCommodityFromLocalStorage()
  },
  [TYPES.FINISHEDITCARTCOMMODITY] (state) {
    savCartCommodityrToLocalStorage(state.cartList)
  }
}
