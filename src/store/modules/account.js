import * as types from '../mutation-types'
import account from '../../api/account'

const state = {
    userLicense: JSON.parse(localStorage.getItem('userLicense')) || {}
}
const getters = {
    getUserLicense: state => state.userLicense
}

const actions = {
    async login ({ commit }, params) {
        const res = await account.login(params.user.username, params.user.pwd)
        if (res.code === 200) {
            res.data.token = res.token
            localStorage.setItem('userToken', res.data.token)
            localStorage.setItem('userId', res.data.userid)
            localStorage.setItem('userLicense', JSON.stringify(res.data))
            commit(types.LOGIN, res.data)
        }
        return res
    },
    async loginOut ({commit}) {
        await account.loginOut()
        localStorage.removeItem('userToken')
        localStorage.removeItem('userId')
    },
    async register ({commit}, params) {
        const res = await account.register(params)
        // if (res.code === 200) {
        //     commit(types.REGISTER, res)
        // }
        return res
    },
    async resendEmailAction ({commit}, params) {
        const res = await account.resendEmail(params)
        // if (res.code === 200) {
        //     commit(types.REGISTER, res)
        // }
        return res
    },
    async active ({commit}, id) {
        const res = await account.active(id)
        // if (res.code === 200) {
        //     commit(types.REGISTER, res)
        // }
        return res
    },
    async fwd ({commit}, params) {
        const res = await account.fwd(params)
        return res
    },
    async reset ({commit}, params) {
        const res = await account.reset(params)
        return res
    },
    verifyCode ({commit}, params) {
        account.verifyCode(params.info.account, params.info.verifycode, params.info.areaCode, params.info.require).then(res => {
            res.cb = params.cb
            commit(types.VERIFYCODE, {res})
        })
    }
}

const mutations = {
    [types.LOGIN] (state, res) {
        state.userLicense = res
    },
    [types.REGISTER] (state, res) {
        // if (res.code === 0) {
        //     res.cb(0)
        //     // localStorage.setItem('userLicense', JSON.stringify(res.data))
        //     // state.userLicense = res.data
        //     // res.cb()
        // } else {
        //     res.cb(res.code)
        // }
    },
    clearUserInfo (state) {
        state.userLicense = {}
    },
    updateUserLicense: (state, user) => {
        state.userLicense = { ...state.userLicense, ...user }
    },
    [types.FWD] (state, {res}) {
        if (res.code === 0) {
            res.cb(0)
            // localStorage.setItem('userLicense', JSON.stringify(res.data))
            // state.userLicense = res.data
            // res.cb()
        } else {
            res.cb(res.code)
        }
    },
    [types.VERIFYCODE] (state, {res}) {
        if (res.code === 0) {
            // localStorage.setItem('userLicense', JSON.stringify(res.data))
            // state.userLicense = res.data
            // res.cb()
        } else {
            res.cb(res.code)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
