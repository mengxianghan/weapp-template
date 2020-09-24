const permission = require('./config/permission')

App({
    ...permission,
    onLaunch: function () {

    },
    globalData: {
        isLogin: false
    }
})
