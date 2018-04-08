<template>
  <section class="index-section">
      <div class="section-container topics-container">
       <nav class="nav">
           <router-link to="/" :class="{active: $route.query.tab === 'all' || !$route.query.tab}">全部</router-link>
           <router-link to="/?tab=good" :class="{active:$route.query.tab === 'good'}">精华</router-link>
           <router-link to="/?tab=share" :class="{active:$route.query.tab === 'share'}">分享</router-link>
           <router-link to="/?tab=ask" :class="{active:$route.query.tab === 'ask'}">问答</router-link>
           <router-link to="/?tab=job" :class="{active:$route.query.tab === 'job'}">招聘</router-link>
           <router-link to="/?tab=dev" :class="{active:$route.query.tab === 'dev'}">客户端测试</router-link>
       </nav>
       <div class="topics-list">
            <div class="mark-box" v-show="mark">
                <div class="mark-line"></div>
                <div class="mark-line"></div>
                <div class="mark-line"></div>
            </div>
            <Lists :topics = "topics"/>
       </div>
       <div class="panination-box">
           <Page :total="total" :page-size="40" :current.sync="page" @on-change="currentChange"/>
       </div>
      </div>
      <SideBars/>
  </section>
</template>

<script>
import axios from 'axios'
import API_CONFIG from '@/api/index'
export default {
    name: 'index',
    data() {
        return {
            total: 999, // 总条数
            page: 1, // 当前页
            topics: [], // 主题列表
            mark: true
        }
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1
        this.fetchTopics()
    },
    methods: {
        // 获取主题列表
        fetchTopics() {
            var beforeTime = Date.now()
            axios
                .get(API_CONFIG.topics, {
                    params: {
                        limit: 40,
                        page: this.page,
                        mdrender: false,
                        tab: this.$route.query.tab || 'all'
                    }
                })
                .then(res => {
                    var afterTime = Date.now() - beforeTime
                    if (afterTime <= 3000) {
                        setTimeout(() => {
                            this.mark = false
                        }, 3000 - afterTime)
                    } else {
                        this.mark = false
                    }
                    if (res.data.success) {
                        this.topics = res.data.data
                    }
                })
                .catch(e => e)
        },
        //  翻页
        currentChange(page) {
            this.$router.push({
                name: this.$route.name,
                query: {
                    tab: this.$route.query.tab,
                    page
                }
            })
        }
    },
    watch: {
        $route(to, from) {
            if (to.name !== 'HomePage') return
            if (to.query.page === 1 || !to.query.page) this.page = 1
            this.fetchTopics()
        }
    }
}
</script>

<style scoped lang="scss">
.index-section {
    .section-container {
        background-color: #fff;
        box-shadow: 0 0 8px #ccc;
        .nav {
            padding: 10px 0;
            background-color: #f6f6f6;
            border-radius: 5px 5px 0 0;
            a {
                padding: 2px 5px;
                margin-left: 15px;
                color: #80bd01;
                &.active {
                    background-color: #80bd01;
                    color: #fff;
                }
            }
        }
        .topics-list {
            position: relative;
            border-radius: 0 0 5px 5px;
            overflow: hidden;
            min-height: 1000px;
            .mark-box {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #fff;
                .mark-line {
                    margin: 15px 0 0 15px;
                    background-color: #f7f7f7;
                    height: 35px;
                    width: 35%;
                    &:nth-child(2),
                    &:nth-child(3) {
                        width: 30%;
                    }
                }
            }
        }
        .panination-box {
            margin: 15px 0 20px 10px;
        }
    }
}
</style>
