const app = getApp()
const routerPage = function (obj) {
  const _onLoad = obj.onLoad
  const _onShow = obj.onShow
  const _onReady = obj.onReady
  const _onHide = obj.onHide
  const _onUnload = obj.onUnload

  obj.onLoad = function (options) {
    if (app.routerOnLoad) {
      app.routerOnLoad.call(this, options)
    }
    _onLoad.call(this, options)
  }

  obj.onShow = function () {
    if (app.routerOnShow) {
      app.routerOnShow.call(this)
    }
    _onShow.call(this)
  }

  obj.onReady = function () {
    if (app.routerOnReady) {
      app.routerOnReady.call(this)
    }
    _onReady.call(this)
  }

  obj.onHide = function () {
    if (app.routerOnHide) {
      app.routerOnHide.call(this)
    }
    _onHide.call(this)
  }

  obj.onUnload = function () {
    if (app.routerOnUnLoad) {
      app.routerOnUnLoad.call(this, options)
    }
    _onUnload.call(this)
  }

  return Page(obj)
}

module.exports = routerPage