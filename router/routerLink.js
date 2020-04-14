const app = getApp()

/**
 * 格式化参数
 * @param {*} query 
 */
const formateUrl = function (obj = {}) {
    if (obj.hasOwnProperty('query')) {
        let queryArr = [],
            query = ''
        for (let key in obj.query) {
            queryArr.push(`${key}=${obj.query[key]}`)
        }
        query = queryArr.join('&')
        obj.url = obj.url.indexOf('?') > -1 ? `${obj.url}&${query}` : `${obj.url}?${query}`
        delete obj.query
    }
    return obj
}

/**
 * 重构导航api
 */
const routerLink = {}
const navigateMap = ['switchTab', 'reLaunch', 'redirectTo', 'navigateTo', 'navigateBack']
const routerBeforeEach = app.routerBeforeEach || function (to, next) {
    next()
}
navigateMap.forEach(key => {
    routerLink[key] = function (obj) {
        routerBeforeEach.call(this, obj, function (to = obj) {
            if(to) wx[key](formateUrl(to))
        })
    }
})

module.exports = routerLink