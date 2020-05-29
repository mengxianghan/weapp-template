Page({
    data: {},
    onLoad: function (options) {

    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                active: 1
            })
        }
    },
    /**
     * Github
     */
    handleGithub() {
        wx.setClipboardData({
            data: 'https://github.com/mengxianghan/xy_weapp.git'
        })
    }
})
