const app = getApp()
const {router} = require('../../router/index')
Page({
    data: {
        isLogin: false
    },
    onLoad: function (options) {
        this.setData({
            isLogin: app.globalData.isLogin
        })
    },
    handleSignIn() {
        app.globalData.isLogin = true
        this.setData({
            isLogin: true
        })
    },
    handleSignOut() {
        app.globalData.isLogin = false
        this.setData({
            isLogin: false
        })
    },
    handleNavigate(e) {
        const {url, linkType} = e.currentTarget.dataset
        router[linkType]({
            url
        })
    }
})
