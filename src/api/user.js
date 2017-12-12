import {fetch, ajaxFormdata} from '../axios'
const apiUrl = process.env.NODE_ENV === 'production' ? 'http://118.178.191.157:809/' : 'api/'

const getApiUrl = (path) => {
    return apiUrl + path
}
const USER_API = {
    get: getApiUrl('user/get'),
    edit: getApiUrl('user/edit'),
    collect: getApiUrl('user/collect')
}

export default {
    async get (id) {
        let _data = {
            id: id
        }
        const promise = await fetch(USER_API.get, _data, 'GET')
        return promise
    },
    async edit (user) {
        const promise = await ajaxFormdata(USER_API.edit, user, 'POST')
        return promise
    },
    async collect (userid, page = 1, pagesize = 5, type = 1) {
        const _data = {
            userid: userid,
            page: page,
            pagesize: pagesize,
            type: type
        }
        const promise = fetch(USER_API.collect, _data, 'GET')
        return promise
    }
}
