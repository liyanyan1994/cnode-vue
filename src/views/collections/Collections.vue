<template>
  <section class="index-section">
      <div class="topics-container collections">
          <div class="collections-loading" v-show="loading">Loading...</div>
          <div class="collection-title">
              <router-link to="/">主页</router-link>
              <em class="slashes"> / </em>
              <span>i5ting收藏话题</span>
          </div>
          <Lists/>
      </div>
      <SideBars/>
  </section>
</template>

<script>
export default {
    name: 'Collections',
    data() {
        return {
            loading: false
        }
    },
    components: {}
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
