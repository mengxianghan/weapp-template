const app = getApp()
const {routerLink} = require('../../router/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redirect: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { redirect = '' } = options
    this.setData({
      redirect: decodeURIComponent(redirect)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleSignIn: function () {
    const { redirect } = this.data
    app.globalData.isLogin = true
    wx.showToast({
      title: '登录成功',
      icon: 'none'
    })
    // 有跳转链接
    if (redirect) {
      routerLink.redirectTo({
        url: redirect
      })
    }
    // 没有跳转链接
    else {
      const currentPages = getCurrentPages()
      if (currentPages.length > 1) {
        routerLink.navigateBack()
      } else {
        routerLink.navigateTo({
          url: '/pages/index/index'
        })
      }
    }
  },
  handleSignOut: function () {
    app.globalData.isLogin = false
  }
})