import archive from '../../api/archive'

const state = {
    illustrations: [],
    illustrationDetail: {},
    icons: [],
    icondetail: {},
    photographys: [],
    photographyDetail: {},
    templates: [],
    templateDetail: {},
    projects: [],
    projectDetail: {},
    collectDetail: {}
}

const getters = {
    illustrations: state => state.illustrations,
    illustrationDetail: state => state.illustrationDetail,
    icons: state => state.icons,
    iconsDetail: state => state.iconnDetail,
    photographys: state => state.photographys,
    photographyDetail: state => state.photographyDetail,
    templates: state => state.templates,
    templateDetail: state => state.templateDetail,
    projects: state => state.projects,
    projectnDetail: state => state.projectDetail,
    collectDetail: steate => state.collectDetail
}

const actions = {
    async addCollectAction ({ commit }, collect) {
        const res = await archive.addCollect(collect)
        if (res.code === 200) {
            return true
        } else {
            return false
        }
    },
    async collectDetailAction ({ commit }, id) {
        const res = await archive.collectDetail(id)
        if (res.code === 200) {
            commit('collectDetailMutation', res)
            return true
        } else {
            return false
        }
    },
    async illustrationsAction ({ commit }, params) {
        params.type = 1
        if (params.page === 1) {
            commit('clearIllustrations')
        }
        const res = await archive.getillustrationlist(params)
        console.log(res)
        if (res.code === 200) {
            commit('illustrtionsMutation', res)
            return res.data.length === 0
        } else {
            return false
        }
    },
    async illustrationDetailAction ({ commit }, id) {
        const res = await archive.getillustrationDetail(id)
        if (res.code === 200) {
            commit('illustrationDetailMutation', res)
            // return res.data.length === 0
        } else {
            // return false
        }
    },
    async iconsAction ({ commit }, params) {
        params.type = 2
        if (params.page === 1) {
            commit('clearIcons')
        }
        const res = await archive.getillustrationlist(params)
        console.log(res)
        if (res.code === 200) {
            commit('iconsMutation', res)
            return res.data.length === 0
        } else {
            return false
        }
    },
    async iconDetailAction ({ commit }, id) {
        const res = await archive.getillustrationDetail(id)
        if (res.code === 200) {
            commit('iconDetailMutation', res)
        }
    },
    async photographysAction ({ commit }, params) {
        params.type = 3
        if (params.page === 1) {
            commit('clearPhotographys')
        }
        const res = await archive.getillustrationlist(params)
        console.log(res)
        if (res.code === 200) {
            commit('photographysMutation', res)
            return res.data.length === 0
        } else {
            return false
        }
    },
    async photographyDetailAction ({ commit }, id) {
        const res = await archive.getillustrationDetail(id)
        if (res.code === 200) {
            commit('photographyDetailMutation', res)
        }
    },
    async templatesAction ({ commit }, params) {
        params.type = 4
        if (params.page === 1) {
            commit('clearTemplates')
        }
        const res = await archive.getillustrationlist(params)
        if (res.code === 200) {
            commit('templatesMutation', res)
            return res.data.length === 0
        } else {
            return 0
        }
    },
    async templateDetailAction ({ commit }, id) {
        const res = await archive.getillustrationDetail(id)
        if (res.code === 200) {
            commit('templateDetailMutation', res)
        }
    },
    async projectsAction ({ commit }, params) {
        params.type = 5
        const res = await archive.getillustrationlist(params)
        console.log(res)
        if (res.code === 200) {
            commit('projectsMutation', res)
            return res.data.length === 0
        } else {
            return false
        }
    },
    async projectDetailAction ({ commit }, id) {
        const res = await archive.getillustrationDetail(id)
        if (res.code === 200) {
            commit('projectDetailMutation', res)
        }
    }
}

const mutations = {
    collectDetailMutation (state, res) {
        state.collectDetail = res.data
    },
    illustrtionsMutation (state, res) {
        state.illustrations = state.illustrations.concat(res.data)
    },
    illustrationDetailMutation (state, res) {
        state.illustrationDetail = res.data
    },
    clearIllustrations (state) {
        state.illustrations = []
    },
    iconsMutation (state, res) {
        state.icons = state.icons.concat(res.data)
    },
    iconDetailMutation (state, res) {
        state.iconDetail = res.data
    },
    clearIcons (state) {
        state.icons = []
    },
    photographysMutation (state, res) {
        state.photographys = state.photographys.concat(res.data)
    },
    photographyDetailMutation (state, res) {
        state.photographyDetail = res.data
    },
    clearPhotographys (state) {
        state.photographys = []
    },
    templatesMutation (state, res) {
        state.templates = state.templates.concat(res.data)
    },
    templateDetailMutation (state, res) {
        state.templateDetail = res.data
    },
    clearTemplates (state) {
        state.templates = []
    },
    projectsMutation (state, res) {
        state.projects = state.projects.concat(res.data)
    },
    projectDetailMutation (state, res) {
        state.projectDetail = res.data
    },
    clearProjects (state) {
        state.projects = []
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
