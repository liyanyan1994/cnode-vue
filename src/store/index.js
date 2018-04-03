import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import API_CONFIG from '../api/index'
Vue.use(Vuex)

var store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    state: {
        isLogin: false,
        accessToken:
            window.localStorage.access_token ||
            'ca46a8dd-671e-4ee2-95d6-fb5be620544e',
        userInfo: {
            avatar_url:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',
            id: '',
            loginname: ''
        },
        messageCount: 0
    },
    actions: {
        // 检查是否已登录
        checkLogin({ state, dispatch, commit }) {
            if (state.accessToken) {
                axios
                    .post(API_CONFIG.login)
                    .then(res => {
                        if (res.data.success) {
                            commit('updateLoginStatus', res.data)
                            dispatch('fetchMessageCount')
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        // 获取未读消息的条数
        fetchMessageCount({ commit }) {
            axios.get(API_CONFIG.messageCount).then(res => {
                if (res.data.success) {
                    commit('updateMessageCount', res.data.data)
                }
            })
        }
    },
    mutations: {
        // 更新登录状态
        updateLoginStatus(state, data) {
            if (data.accessToken) {
                window.localStorage.access_token = window.localStorage.save_access_token = state.accessToken =
                    data.accessToken
                state.userInfo = data.userInfo
            } else {
                state.userInfo = data
            }
            state.isLogin = true
        },
        // 更新未读消息数
        updateMessageCount (state, count) {
            state.messageCount = count
        },
        logout(state) {
            window.localStorage.removeItem('access_token')
            state.isLogin = false
            state.accessToken = ''
        }
    }
})

export default store
