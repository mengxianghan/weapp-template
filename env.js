/**
 * @Author: MengXianghan
 * @Date: 2020-09-24
 * @Description: 环境变量
 */
const ENV = 'dev'

module.exports = require(`./env.${ENV}`)
