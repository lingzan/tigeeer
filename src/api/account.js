import {fetch} from '../axios'

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://118.178.191.157:809/' : 'api/'

const getApiUrl = (path) => {
    return apiUrl + path
}
const ACCOUNT_API = {
    login: getApiUrl('login'),
    checkLogin: getApiUrl('login/checkLogin'),
    loginOut: getApiUrl('login/logout'),
    register: getApiUrl('register'),
    fwd: getApiUrl('fwd/sendEmail'),
    reset: getApiUrl('fwd/reset'),
    resendEmail: getApiUrl('register/resendEmail'),
    active: getApiUrl('register/check'),
    verifyCode: getApiUrl('sms/verify')
}

export default {
    login (username, pwd, areaCode) {
        let _data = {
            username: username,
            password: pwd
        }
        let res = fetch(ACCOUNT_API.login, _data, 'POST')
        return res
    },
    loginOut () {
        let res = fetch(ACCOUNT_API.loginOut, {}, 'GET')
        return res
    },
    checkLogin () {
        let res = fetch(ACCOUNT_API.checkLogin, {}, 'GET')
        return res
    },
    register (registerInfo) {
        let _data = {
            username: registerInfo.username,
            password: registerInfo.pwd,
            nickname: registerInfo.nickname
        }
        let res = fetch(ACCOUNT_API.register, _data, 'POST')
        return res
    },
    resendEmail (id) {
        let _data = {
            id: id
        }
        let res = fetch(ACCOUNT_API.resendEmail, _data, 'GET')
        return res
    },
    active (id) {
        const _data = {
            id: id
        }
        let res = fetch(ACCOUNT_API.active, _data, 'GET')
        return res
    },
    fwd (username) {
        let _data = {
            username: username
        }
        let promise = fetch(ACCOUNT_API.fwd, _data, 'POST')
        return promise
    },
    reset (user) {
        let promise = fetch(ACCOUNT_API.reset, user, 'POST')
        return promise
    },
    verifyCode (account, verifycode, areaCode, require) {
        let _data = {
            account: account,
            verifycode: verifycode,
            area_code: areaCode,
            require: require
        }
        let promise = fetch(ACCOUNT_API.verifyCode, _data, 'GET')
        return promise
    }
}
