Component({
    externalClasses: ['custom-class'],
    lifetimes: {
        attached() {
            this.init()
        }
    },
    properties: {
        background: {
            type: String,
            value: ''
        }
    },
    data: {
        height: 0
    },
    methods: {
        /**
         * 初始化
         */
        init() {
            const query = wx.createSelectorQuery().in(this)
            query.select('#stickyFooter').boundingClientRect()
            query.exec((res) => {
                if (res.length) {
                    const {height} = res[0]
                    this.setData({
                        height: `${height}px`
                    })
                }
            })
        }
    }
})
