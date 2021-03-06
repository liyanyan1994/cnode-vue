// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iview from 'iview'
import Lists from '@/components/topics-list/TopicsList'
import SideBars from '@/components/sidebar/SideBar'
import 'iview/dist/styles/iview.css'
import './assets/scss/common.scss'
import moment from 'moment'

Vue.use(iview)
Vue.component('Lists', Lists)
Vue.component('SideBars', SideBars)

Vue.config.productionTip = false

Vue.filter('fromNow', date => {
    return moment(date).fromNow()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
