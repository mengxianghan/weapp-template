const flyio = require('flyio/index')
const storage = require('../utils/storage')

const fly = new flyio

// 基本配置
// fly.config = {

// }

// 请求拦截
fly.interceptors.request.use(req => {
    const method = req.method.toLowerCase()
    const isLogin = storage.getIsLogin()
    const userInfo = storage.getUserInfo()
    //已登录
    if (isLogin) {
        if (method === 'post') {
            req.body = {
                ...req.body,
                userId: userInfo.userId
            }
        } else if (method === 'get') {
            req.params = {
                ...req.params,
                userId: userInfo.userId
            }
        }
    }
    return req
})

// 响应拦截
fly.interceptors.response.use(res => {
    const {data} = res
    if (!data.IsSuccess) {
        wx.showToast({
            title: data.Message || '系统错误'
        })
    }
    return res
}, err => {
    return Promise.reject(err)
})

class http {
    constructor(config = {}) {
        this.config = {
            baseURL: '',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            ...config
        }
    }

    request(url = '', params = {}, config = {}) {
        return new Promise((resolve, reject) => {
            fly.request(url, params, {
                ...this.config,
                ...config
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(url = '', params = {}, config = {}) {
        return this.request(url, params, {
            method: 'get',
            ...config
        })
    }

    post(url = '', params = {}, config = {}) {
        return this.request(url, params, {
            method: 'post',
            ...config
        })
    }

    upload(url = '', params = {
        name: '',
        filePath: '',
        formData: {}
    }) {
        return new Promise((resolve, reject) => {
            wx.uploadFile({
                url: (params.baseURL || this.config.baseURL) + url,
                name: params.name,
                filePath: params.filePath,
                formData: {
                    ...params.formData
                },
                success: (res) => {
                    resolve(JSON.parse(res.data) || {})
                },
                fail: (err) => {
                    reject(err)
                },
                complete: (res) => {
                    resolve('complete')
                }
            })
        })
    }

}

class Api extends http {
    constructor() {
        super({
            baseURL: '' //接口地址
        })
    }
}

//读取远程文件内容
class ReadFile extends http {
    constructor() {
        super({
            baseURL: '',
            responseType: 'blob',
            transformResponse: [(data) => {
                return new Promise((resolve, reject) => {
                    let reader = new FileReader()
                    reader.readAsText(data, 'UTF-8')
                    reader.onload = function (e) {
                        resolve(reader.result)
                    }
                })
            }]
        })
    }
}

module.exports = {
    api: new Api(),
    readFile: new ReadFile()
}
