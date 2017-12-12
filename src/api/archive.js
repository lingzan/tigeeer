import {fetch, ajaxFormdata} from '../axios'
const apiUrl = process.env.NODE_ENV === 'production' ? 'http://118.178.191.157:809/' : 'api/'

const getApiUrl = (path) => {
    return apiUrl + path
}
const ARCHIVE_API = {
    archive: getApiUrl('collect/list'),
    get: getApiUrl('collect/get'),
    add: getApiUrl('collect/add')
}

export default {
    getillustrationlist (params) {
        /*
            @var page:1
            @var rows:6
            @var headline:1
            @var get_userstat:1
            @var arctype:expert_question|article|expert
        */
        let promise = fetch(ARCHIVE_API.archive, params, 'GET')
        return promise
    },
    addCollect (collect) {
        let promise = ajaxFormdata(ARCHIVE_API.add, collect, 'POST')
        return promise
    },
    collectDetail (id) {
        /*
            @var id:1
        */
        const _data = {
            id: id
        }
        let promise = fetch(ARCHIVE_API.get, _data, 'GET')
        return promise
    },
    getKnowledge (params) {
        /*
            @var page:1
            @var rows:6
            @var classify_level:knowledga
            @var arctype:expert_question|article
        */
        let promise = fetch(ARCHIVE_API.archive, params, 'GET')
        return promise
    }
}
