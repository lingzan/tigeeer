// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
// import axios from 'axios'
import store from './store/store'
import Loading from './components/widget/loading'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import qs from 'qs'
Vue.use(Vuex)

Vue.use(infiniteScroll)
// Vue.use(VueAwesomeSwiper)

Vue.component('loading-component', Loading)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
