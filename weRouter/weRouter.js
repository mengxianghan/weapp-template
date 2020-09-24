const app = getApp()

const format = (obj = {}) => {
    if (obj.hasOwnProperty('query')) {
        const query = Object.entries(obj.query).reduce((result, current) => {
            result.push(current.join('='))
            return result
        }, []).join('&')

        obj.url = obj.url.indexOf('?') > -1 ? `${obj.url}&${query}` : `${obj.url}?${query}`
        delete obj.query
    }
    return obj
}

/**
 * 重构导航api
 */
const weRouter = {}
const navigateMap = ['switchTab', 'reLaunch', 'redirectTo', 'navigateTo', 'navigateBack']
const routerBeforeEach = app.routerBeforeEach || function (to, next) {
    next()
}
navigateMap.forEach(key => {
    weRouter[key] = function (obj) {
        routerBeforeEach.call(this, obj, function (to = obj) {
            if (to) wx[key](format(to))
        })
    }
})

module.exports = weRouter
