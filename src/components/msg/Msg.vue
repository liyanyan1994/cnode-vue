<template>
  <div class="msg-list">
      <div class="msg-loading" v-show="loading">Loading...</div>
      <div class="no-msg">暂时无消息</div>
      <ul>
          <li>
              <div>
                  <router-link to="/user">liyanyan1994</router-link>
                  <span>回复了你的话题</span>
                  <router-link to="/topic">topic title</router-link>
              </div>
          </li>
          <li>
              <div>
                  <router-link to="/user">liyanyan1994</router-link>
                  <span>在话题</span>
                  <router-link to="/topic">topic title</router-link>
                  <span>中@了你</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      loading: false
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.msg-list{
    position: relative;
    background-color: #fff;
    padding: 10px;
    .msg-loading{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #f7f7f7;
    }
    li{
        padding: 10px 0;
        &:not(:nth-last-child(1)){
            border-bottom: 1px solid #f6f6f6;
        }
        >div{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        a{
            color: #08c;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>
