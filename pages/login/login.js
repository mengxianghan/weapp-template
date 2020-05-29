const app = getApp()
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
            wx.navigateTo({
                url: redirect,
                fail() {
                    wx.switchTab({
                        url: redirect
                    })
                }
            })
        } else {
            // 没有跳转连接
            wx.switchTab({
                url: '/pages/index/index'
            })
        }
    }
})
