<template>
  <div class="topics-list">
      <ul class="unique-topics-list" v-if="topics.length>0">
          <li v-for="item in topics" :key="item.id">
              <div class="avatar">
                  <router-link :to="{name:'User',params:{loginname: item.author.loginname}}">
                    <img alt="头像" :src="item.author.avatar_url" :title="item.author.loginname">
                  </router-link>
              </div>
              <div class="reply-view" v-if="item.reply_count !== undefined">{{item.reply_count}}/{{item.visit_count}}</div>
              <span class="tag top">置顶</span>
              <router-link class="title" :to="{name: 'Topic',params:{id: item.id}}">{{item.title}}</router-link>
              <div class="last-reply-time">
                  <time>{{item.last_reply_at | fromNow }</time>
              </div>
          </li>
      </ul>
      <p v-else class="no-topics">无话题</p>
  </div>
</template>

<script>
export default {
    name: 'TopicsList',
    data() {
        return {}
    },
    props: {
        topics: {
            type: Array,
            default() {
                return []
            },
            isrequired: true
        }
    }
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
    .no-topics {
        padding: 10px;
    }
}
</style>
