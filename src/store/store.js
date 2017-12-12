import Vue from 'vue'
import Vuex from 'vuex'

import Account from './modules/account'
import User from './modules/user'
import Common from './modules/common'
import Archive from './modules/archive'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        account: Account,
        common: Common,
        user: User,
        archive: Archive
    }
})

export default store
