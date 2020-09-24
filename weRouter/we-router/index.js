const app = getApp()
Component({
    externalClasses: ['custom-class'],
    lifetimes: {
        attached() {
            this.setUrl()
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        target: {
            type: String,
            value: 'self'
        },
        url: String,
        openType: {
            type: String,
            value: 'navigate'
        },
        delta: {
            type: Number,
            value: 1
        },
        appId: String,
        path: String,
        extraData: Object,
        version: {
            type: String,
            value: 'release'
        },
        hoverClass: {
            type: String,
            value: 'navigator-hover'
        },
        hoverStopPropagation: {
            type: Boolean,
            value: false
        },
        hoverStartTime: {
            type: Number,
            value: 50
        },
        hoverStayTime: {
            type: Number,
            value: 600
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentUrl: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        setUrl() {
            const {url} = this.data
            app.routerBeforeEach.call(this, {
                    url
                },
                (to = {url}) => {
                    this.setData({
                        currentUrl: to.url
                    })
                })
        },
        onSuccess(e) {
            this.triggerEvent('success', e)
        },
        onFail(e) {
            this.triggerEvent('fail', e)
        },
        onComplete(e) {
            this.triggerEvent('complete', e)
        }
    }
})
