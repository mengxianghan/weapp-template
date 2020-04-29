module.exports = {
    /**
     * 验证邮箱
     * @param str
     * @returns {boolean}
     */
    email: (str) => {
        return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str)
    },
    /**
     * 验证手机号
     * @param str
     * @returns {boolean}
     */
    mobile: (str) => {
        return /0?(13|14|15|17|18|19)[0-9]{9}/.test(str)
    }
}