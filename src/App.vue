<template>
  <div id="app">
      <div class="go-top user-select-none">
          <p>回</p>
          <p>到</p>
          <p>顶</p>
          <p>部</p>
      </div>
    <div class="router-view">
        <Headers/>
        <router-view/>
        <Footers/>
    </div>
  </div>
</template>

<script>
import Headers from './components/headers/Headers'
import Footers from './components/footers/Footers'
import axios from 'axios'
export default {
    name: 'App',
    components: { Headers, Footers },
    created() {
        this.axiosConfig()
        this.$store.dispatch('checkLogin')
    },
    methods: {
        axiosConfig() {
            axios.interceptors.request.use(
                config => {
                    if (config.method === 'post') {
                        config.data = Object.assign(
                            { accesstoken: this.$store.state.accessToken },
                            config.data
                        )
                    }
                    if (config.method === 'get') {
                        config.params = Object.assign(
                            { accesstoken: this.$store.state.accessToken },
                            config.params
                        )
                    }
                    return config
                },
                e => {
                    this.$Message.warning('API请求失败！')
                    return Promise.reject(e)
                }
            )

            axios.interceptors.response.use(
                res => {
                    return res
                },
                e => {
                    this.$Message.warning('请求超时or服务器出错')
                    return Promise.reject(e)
                }
            )
        }
    }
}
</script>

<style lang="scss">
.go-top {
    position: fixed;
    z-index: 666;
    bottom: 109px;
    right: 0px;
    padding: 5px 10px;
    border-radius: 12px 0 0 12px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        color: #f6f6f6;
    }
    p {
        color: #666;
    }
}
.router-view {
    display: flex;
    flex-direction: column;
}
</style>
