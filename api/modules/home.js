import request from '../../utils/request'

module.exports = {
    getList: params => request.api.get('/', params)
}
