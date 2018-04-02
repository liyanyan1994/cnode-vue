<template>
  <div class="headers">
      <div class="headers-box">
          <router-link to="/" class="logo user-select-none">
            <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo">
          </router-link>
          <nav class="nav-box">
            <router-link to="/" >首页</router-link>
            <router-link to="/messages" >未读消息</router-link>
            <a href="https://github.com/liyanyan1994" target="_blank">关于作者</a>
            <router-link to="/login" >登录</router-link>
          </nav>
      </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variable.scss';
.headers {
  background-color: #444;
  padding: 10px 10px 15px 0;
  z-index: 6;
  .headers-box {
    margin: 0 auto;
    width: $width;
    overflow: hidden;
    .logo {
      float: left;
      img {
        width: 120px;
      }
    }
    .nav-box{
        margin-top: 8px;
        float:right;
        a{
            position: relative;
            color: #ccc;
            margin-left: 20px;
            &:hover{
                color: #fff;
            }
        }
    }
  }
}
</style>
