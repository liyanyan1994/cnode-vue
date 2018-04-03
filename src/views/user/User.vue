<template>
  <section class="index-section">
      <div class="topics-container user">
        <div class="box">
            <div class="box-title">
                <router-link to="/">主页</router-link>
                <em class="slashes"> / </em>
                <span>个人主页</span>
            </div>
            <div class="user-info">
                <div class="user">
                    <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="avatar"/>
                    <span>imzengyang</span>
                </div>
                <div>120积分</div>
                <div class="view-topics-collections">
                    <router-link to="/collections">查看话题收藏</router-link>
                    <div class="create-at">注册时间 8个月前</div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-title">最近创建的话题</div>
            <Lists/>
        </div>
        <div class="box">
            <div class="box-title">最近参与的话题</div>
            <Lists/>
        </div>
      </div>
      <SideBars/>
  </section>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {}
    },
    components: {}
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variable.scss';
.user {
    .box {
        margin-bottom: 15px;
        background-color: #fff;
        border-radius: 3px;
        .box-title {
            padding: 10px;
            background-color: $boxTopColor;
            a {
                color: #80bd01;
                &:hover {
                    text-decoration: underline;
                }
            }
            .slashes {
                color: #ccc;
            }
            span {
                color: #999;
            }
        }
        .user-info {
            padding: 15px 10px;
            .user {
                margin-bottom: 10px;
                img {
                    width: 50px;
                    height: 50px;
                    background-color: #f6f6f6;
                    vertical-align: middle;
                }
                span {
                    margin-left: 10px;
                    vertical-align: middle;
                }
            }
        }
        .view-topics-collection {
            margin-top: 5px;
            a {
                color: #333;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .create-at {
            margin-top: 10px;
            color: #666;
        }
    }
}
</style>
