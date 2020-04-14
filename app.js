const whiteList = require('./config/whiteList')
const {
  inWhiteList
} = require('./utils/util')
App({
  routerBeforeEach: function (to, next) {
    if (!this.globalData.isLogin && !inWhiteList(whiteList, to.url)) {
      next({
        url: '/pages/login/login',
        query: {
          redirect: encodeURIComponent(to.url)
        }
      })
    } else {
      next()
    }
  },
  routerOnLoad: function (options) {
    const app = getApp()
    const currentPages = getCurrentPages()
    const {routerLink} = require('./router/index')
    app.routerBeforeEach({
      url:`/${currentPages[currentPages.length - 1].route}`
    },function(obj){
      routerLink.redirectTo(obj)
    })
  },
  onLaunch: function () {

  },
  globalData: {
    isLogin: false
  }
})