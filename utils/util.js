/**
 * 是否在白名单
 * @param {*} whiteList 
 * @param {*} url 
 */
export function inWhiteList(whiteList = [], url) {
  let flag = false
  for (let item of whiteList) {
    if (item.indexOf(url) > -1) {
      flag = true
      break
    }
  }
  return flag
}