import routes from './config/routes'

App({
    routerBeforeEach: function (to, next) {
        let isValidLogin = false
        for (let val of routes) {
            if (val.indexOf(to.url) > -1) {
                isValidLogin = true
                break
            }
        }
        if (isValidLogin) {
            // 需要登录
            if (this.globalData.isLogin) {
                // 已登录
                next()
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
            next()
        }
    },
    routerOnLoad: function (options) {
        const app = getApp()
        const currentPages = getCurrentPages()
        const {routerLink} = require('./router/index')
        app.routerBeforeEach({
            url: `/${currentPages[currentPages.length - 1].route}`
        }, function (obj) {
            routerLink.redirectTo(obj)
        })
    },
    onLaunch: function () {

    },
    globalData: {
        isLogin: false
    }
})
