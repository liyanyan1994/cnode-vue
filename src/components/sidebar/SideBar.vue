<template>
  <aside class="sidebar">
      <div class="personal-information">
          <div>
              <div class="top user-select-none">作者</div>
              <div class="info user-select-none">
                  <router-link to="/">
                    <img src="../../assets/images/github.svg" alt="touxiang">
                  </router-link>
                  <router-link to="/user">
                    <em class="nickname">imzengyang</em>
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
export default {
    name: 'SideBar',
    data() {
        return {}
    },
    components: {}
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
        .friendship-community {
            padding: 10px;
            img {
                width: 150px;
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
