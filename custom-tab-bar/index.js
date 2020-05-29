Component({
    properties: {},
    data: {
        active: 0,
        list: [
            {
                pagePath: '/pages/index/index',
                iconPath: 'wap-home-o',
                selectedIconPath: 'wap-home',
                text: '首页'
            },
            {
                pagePath: '/pages/user/user',
                iconPath: 'manager-o',
                selectedIconPath: 'manager',
                text: '我的'
            }
        ]
    },
    methods: {
        onChange(e) {
            const index = e.detail
            const {list} = this.data
            wx.switchTab({
                url: list[index].pagePath
            })
        }
    }
})
