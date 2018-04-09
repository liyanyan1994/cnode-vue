<template>
  <section class="index-section">
      <div class="topics-container collections">
          <div class="collections-loading" v-show="loading">Loading...</div>
          <div class="collection-title">
              <router-link to="/">主页</router-link>
              <em class="slashes"> / </em>
              <span>{{this.$route.params.loginname}}收藏话题</span>
          </div>
          <Lists :topics="userCollections"/>
      </div>
      <SideBars/>
  </section>
</template>

<script>
import axios from 'axios'
import API_CONFIG from '@/api/index'
export default {
    name: 'Collections',
    data() {
        return {
            loading: true,
            userCollections: []
        }
    },
    created() {
        this.fetchCollections()
    },
    methods: {
        fetchCollections() {
            axios
                .get(
                    `${API_CONFIG.userCollections}${
                        this.$route.params.loginname
                    }`
                )
                .then(res => {
                    if (res.data.success) {
                        this.loading = false
                        this.userCollections = res.data.data
                    }
                })
                .catch(e => {
                    this.$Message.warning('不存在此用户')
                    this.$router.replace('/')
                })
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variable.scss';
.collections {
    position: relative;
    min-height: 250px;
    background-color: #fff;
    .collections-loading {
        position: absolute;
        left: calc(50% - 30px);
        top: 80px;
    }
    .collection-title {
        padding: 10px;
        background-color: $boxTopColor;
        a {
            color: #80bd01;
            &:hover {
                text-decoration: underline;
                color: #333;
            }
        }
        em {
            color: #ccc;
        }
        span {
            color: #999;
        }
    }
}
</style>
