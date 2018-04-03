<template>
  <div class="topics-list">
      <ul class="unique-topics-list">
          <li>
              <div class="avatar">
                  <router-link to='/user'>
                    <img alt="头像" src="../../assets/images/github.svg">
                  </router-link>
              </div>
              <div class="reply-view">23/27</div>
              <span class="tag top">置顶</span>
              <router-link class="title" to="/topic">为社区做贡献，帮社区写自动化测试代码</router-link>
              <div class="last-reply-time">
                  <time>16 小时前</time>
              </div>
          </li>
          <li>
              <div class="avatar">
                  <router-link to='/user'>
                    <img alt="头像" src="../../assets/images/github.svg">
                  </router-link>
              </div>
              <div class="reply-view">23/27</div>
              <span class="tag top">置顶</span>
              <router-link class="title" to="/topic">为社区做贡献，帮社区写自动化测试代码</router-link>
              <div class="last-reply-time">
                  <time>16 小时前</time>
              </div>
          </li>
          <li>
              <div class="avatar">
                  <router-link to='/user'>
                    <img alt="头像" src="../../assets/images/github.svg">
                  </router-link>
              </div>
              <div class="reply-view">23/27</div>
              <span class="tag top">置顶</span>
              <router-link class="title" to="/topic">为社区做贡献，帮社区写自动化测试代码</router-link>
              <div class="last-reply-time">
                  <time>16 小时前</time>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'TopicsList',
    data() {
        return {}
    },
    components: {}
}
</script>

<style scoped lang="scss">
.topics-list {
    .unique-topics-list {
        li {
            overflow: hidden;
            padding: 10px;
            &:not(:nth-last-child(1)) {
                border-bottom: 1px solid #f6f6f6;
            }
            &:hover {
                background-color: #eee;
            }
        }
        .avatar {
            float: left;
            img {
                width: 35px;
                height: 35px;
                object-fit: cover;
                border-radius: 2px;
            }
        }
        .reply-view {
            float: left;
            width: 70px;
            text-align: center;
            font-size: 12px;
            margin: 9px 0 0 20px;
        }
        .tag {
            float: left;
            margin-top: 7px;
            font-size: 12px;
            padding: 2px 4px;
            border-radius: 3px;
            font-weight: 500;
        }
        .top {
            background-color: #80bd01;
            color: #fff;
        }
        .title {
            display: inline-block;
            margin: 6px 0 0 5px;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: calc(100% - 230px);
            &:hover {
                text-decoration: underline;
                color: #333;
            }
        }
        .last-reply-time {
            float: right;
            font-size: 12px;
            margin-top: 8px;
        }
    }
}
</style>
