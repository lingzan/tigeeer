import * as types from '../mutation-types'
import user from '../../api/user'

const state = {
    user: '',
    userCollect: []
}

const getters = {
    user: state => state.user,
    userCollect: state => state.userCollect
}

const actions = {
    async getUserInfo ({ commit }, id) {
        const res = await user.get(id)

        commit(types.GET_USER, res)
    },
    async updateUserInfo ({ commit }, id) {
        await user.edit(id)
    },
    async editUser ({ commit }, user) {
        const res = await user.edit(user)
        commit(types.GET_USER, res)
        return res
        // commit(types.GET_USER, {res})
    },
    async userCollectAction ({ commit }, params) {
        const res = await user.collect(params.userid, params.page, params.pagesize, params.type)
        console.log(params.page)
        if (params.page === 1) {
            console.log(1)
            commit('clearUserCollect')
        }
        if (res.data.length === 0) {
            return true
        } else {
            commit('setUserCollect', res.data)
            return false
        }
    }
}

const mutations = {
    [types.GET_USER] (state, res) {
        state.user = res.data
    },
    setUserCollect (state, res) {
        state.userCollect = state.userCollect.concat(res)
    },
    clearUserCollect (state) {
        state.userCollect = []
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
