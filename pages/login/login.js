const app = getApp()
const {weRouter} = require('../../weRouter/index')
Page({
    data: {
        redirect: ''
    },
    onLoad: function (options) {
        const {redirect} = options
        this.setData({
            redirect: redirect ? decodeURIComponent(redirect) : ''
        })
    },
    /**
     * 登录
     */
    handleSignIn() {
        const {redirect} = this.data
        app.globalData.isLogin = true
        if (redirect) {
            // 有跳转链接
            weRouter.navigateTo({
                url: redirect,
                fail() {
                    weRouter.switchTab({
                        url: redirect
                    })
                }
            })
        } else {
            // 没有跳转连接
            weRouter.switchTab({
                url: '/pages/index/index'
            })
        }
    }
})
