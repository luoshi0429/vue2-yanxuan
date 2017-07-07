const SHOWCOMMODITYDETAILKEY = 'SHOWCOMMODITYDETAILKEY'
const CARTCOMMODITYKEY = 'CARTCOMMODITYKEY'
const SHOWCARTCOMMODITYKEY = 'SHOWCARTCOMMODITYKEY'

export const getCartCommodityFromLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem(CARTCOMMODITYKEY)) || []
}

export const savCartCommodityrToLocalStorage = (commodities) => {
  window.localStorage.setItem(CARTCOMMODITYKEY, JSON.stringify(commodities))
}

export const getShowCommodityDetail = () => {
  return JSON.parse(window.sessionStorage.getItem(SHOWCOMMODITYDETAILKEY)) || {}
}

export const saveShowCommodityDetail = (commodity) => {
  window.sessionStorage.setItem(SHOWCOMMODITYDETAILKEY, JSON.stringify(commodity))
}

export const saveShowCartCommodity = (commodity) => {
  window.sessionStorage.setItem(SHOWCARTCOMMODITYKEY, JSON.stringify(commodity))
}

export const getShowCartCommodity = (commodity) => {
  return JSON.parse(window.sessionStorage.getItem(SHOWCARTCOMMODITYKEY)) || {}
}