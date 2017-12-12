import axios from 'axios'
import qs from 'qs'
import store from './store/store'
import * as types from './store/mutation-types'

axios.defaults.timeout = 20000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
    store.commit(types.AJAX_SEND)
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data)
    // }
    return Promise.resolve(config)
}, (error) => {
    // alert(error)
    return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
    store.commit(types.AJAX_END)
    if (res.status !== 200) {
        return Promise.reject(res.data)
    }
    if (res.data.code === 200) {
        return Promise.resolve(res.data)
    }
    return Promise.reject(res.data)
}, (error) => {
    // alert('网络异常')
    return Promise.reject(error)
})
// 对象序列化
export function objectSerialize (object) {
    let str = []
    if (typeof object === 'object') {
        for (let i in object) {
            str.push(i + '=' + object[i])
        }
        str = str.join('&')
    }
    return str
}

export const fetch = (url, data, method = 'GET') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        var options = {}
        const tokenArr = {
            token: localStorage.getItem('userToken')
        }
        const _data = Object.assign({}, data, tokenArr)
        if (method === 'POST') {
            options = {
                method: 'post',
                url: url + '?' + objectSerialize(tokenArr),
                data: qs.stringify(data)
            }
        } else {
            options = {
                method: method,
                url: url + '?' + objectSerialize(_data)
            }
        }

        axios(options)
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
export const ajaxFormdata = (url, data, method = 'GET') => {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;charset=UTF-8'
        var options = {}
        const tokenArr = {
            token: localStorage.getItem('userToken')
        }
        const _data = Object.assign({}, data, tokenArr)
        if (method === 'POST') {
            options = {
                method: 'post',
                url: url + '?' + objectSerialize(tokenArr),
                data: data
            }
        } else {
            options = {
                method: method,
                url: url + '?' + objectSerialize(_data)
            }
        }

        axios(options)
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
export default {fetch, ajaxFormdata}
