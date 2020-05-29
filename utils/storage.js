let storage = {}

const storageMap = ['value1', 'value2']

storageMap.forEach((item, index) => {
    let name = item.charAt(0).toUpperCase() + item.slice(1)
    storage[`set${name}`] = (value) => {
        return wx.setStorageSync(item, value)
    }

    storage[`get${name}`] = () => {
        return wx.getStorageSync(item)
    }

    storage[`remove${name}`] = () => {
        return wx.removeStorageSync(item)
    }

    storage[`clear${name}`] = () => {
        return wx.clearStorageSync(item)
    }
})

module.exports = storage
