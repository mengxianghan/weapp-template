/**
 * @Author: MengXianghan
 * @Date: 2020-09-24
 * @Description:
 */
const whiteList = require('../config/whiteList')

module.exports = {
    routerBeforeEach: function (to, next) {
        const checkLogin = whiteList.find(v => to.url.indexOf(v) > -1) !== undefined
        if (checkLogin) {
            // 需要登录
            if (this.globalData.isLogin) {
                // 已登录
                next(to)
            } else {
                // 未登录
                next({
                    url: '/pages/login/login',
                    query: {
                        redirect: encodeURIComponent(to.url)
                    }
                })
            }
        } else {
            // 不需要登录
            next(to)
        }
    },
    routerOnLoad: function (options) {
        const app = getApp()
        const currentPages = getCurrentPages()
        const {weRouter} = require('../weRouter/index')
        app.routerBeforeEach({
            url: `/${currentPages[currentPages.length - 1].route}`
        }, (obj) => {
            weRouter.redirectTo(obj)
        })
    },
}
