const api = require('../../api/index')
Page({
    data: {},
    onLoad: function (options) {

    },
    getList() {
        api.home.getList()
            .then(res=>{
                console.log(res)
            })
            .catch()
    }
})
