<template>
  <aside class="sidebar">
      <div class="personal-information">
          <div v-if="from!= 'topic'">
              <div v-if="isLogin">
                  <div class="top user-select-none">个人信息</div>
                  <div class="info user-select-none">
                      <router-link :to="{name: 'User',params: {loginname: userInfo.loginname}}">
                          <img :src="userInfo.avatar_url" alt="头像"/>
                      </router-link>
                      <router-link :to="{name: 'User',params: {loginname:userInfo.loginname}}" class="nickname">{{userInfo.loginname}}</router-link>
                  </div>
                  <div class="pubulish-topic">
                      <router-link to="/release/topic">发布话题</router-link>
                  </div>
              </div>
              <div v-else class="tourist-box">
                  <div class="cnode">CNode: Node.js专业中文社区</div>
                  <div class="tourist">
                      <span>当前是游客状态,您可以</span>
                      <router-link to="/login">登录</router-link>
                  </div>
              </div>
          </div>
          <div v-else>
              <div class="top user-select-none">作者</div>
              <div class="info user-select-none">
                  <router-link :to="{name:'User',params:{loginname: author.loginname}}">
                    <img :src="author.avatar_url" alt="头像">
                  </router-link>
                  <router-link :to="{name:'User',params:{loginname: author.loginname}}">
                    <em class="nickname">{{author.loginname}}</em>
                  </router-link>
              </div>
          </div>
      </div>
      <div class="friendship-community">
        <div class="top user-select-none">友情社区</div>
            <div class="community user-select-none">
                <ul>
                    <li>
                        <a href="https://ruby-china.org/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" />
                        </a>
                        <div class="sep10"></div>
                    </li>
                    <li>
                        <a href="http://golangtc.com/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png"/>
                        </a>
                        <div class="sep10"></div>
                    </li>
                    <li>
                        <a href="https://testerhome.com/" target="_blank">
                            <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK" />
                        </a>
                        <div class="sep10"></div>
                    </li>
                </ul>
            </div>
        </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SideBar',
    props: {
        from: {
            type: String,
            default: ''
        },
        author: {
            type: Object,
            default() {
                return {
                    avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',
                    id: '',
                    loginname: ''
                }
            }
        }
    },
    computed: {
        ...mapState(['userInfo', 'isLogin'])
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variable.scss';
.sidebar {
    float: right;
    width: $sidebarWidth;
    > div {
        margin-bottom: 20px;
    }
    .personal-information {
        background-color: #fff;
        border-radius: 5px;
        .top {
            padding: 10px;
            background-color: $boxTopColor;
        }
        .info {
            padding: 10px;
            a {
                display: inline-block;
                vertical-align: middle;
            }
            img {
                display: inline-block;
                width: 50px;
                height: 50px;
                background-color: #f7f7ff;
                object-fit: cover;
            }
            .nickname {
                margin-left: 15px;
                color: #333;
                cursor: pointer;
            }
        }
        .pubulish-topic{
            padding: 10px;
        }
        .tourist-box{
            padding: 10px;
        }
        .cnode{
            color: #000;
        }
        .tourist{
            margin-top:15px;
            a{
                color: #2d8cf0;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    .friendship-community {
        background-color: #fff;
        border-radius: 5px;
        .top {
            padding: 10px;
            background-color: $boxTopColor;
        }
        .community {
            padding: 10px;
            .sep10 {
                height: 10px;
            }
            img {
                width: 150px;
            }
        }
    }
}
</style>
