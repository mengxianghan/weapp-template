Page({
    data: {
        statusBarHeight: 0,
        navBarHeight: 0
    },
    onLoad: function (options) {
        this.setNavBarInfo()
    },
    /**
     * 设置导航栏信息
     */
    setNavBarInfo() {
        const {statusBarHeight} = wx.getSystemInfoSync()
        const {top, height} = wx.getMenuButtonBoundingClientRect()

        this.setData({
            statusBarHeight,
            navBarHeight: (top - statusBarHeight) * 2 + height
        })
    }
})
