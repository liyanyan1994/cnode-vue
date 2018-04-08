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
              <span class="tag" :class="tag(item).className" v-if="item.tab">{{tag(item).text}}</span>
              <router-link class="title" :to="{name: 'Topic', params:{id: item.id}}">{{item.title}}</router-link>
              <div class="last-reply-time">
                  <time>{{item.last_reply_at | fromNow }}</time>
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
    },
    methods: {
        tag(topic) {
            if (topic.topic) {
                return {
                    text: '置顶',
                    className: 'top'
                }
            }
            if (topic.good) {
                return {
                    text: '精华',
                    className: 'good'
                }
            }
            switch (topic.tab) {
            case 'ask':
                return {
                    text: '问答',
                    className: 'ask'
                }
            case 'share':
                return {
                    text: '分享',
                    className: 'share'
                }
            case 'job':
                return {
                    text: '招聘',
                    className: 'job'
                }
            case 'dev':
                return {
                    text: '测试',
                    className: 'dev'
                }
            default:
                return {
                    text: '',
                    className: 'default'
                }
            }
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
            color: #999;
            padding: 2px 4px;
            border-radius: 3px;
            font-weight: 500;
            background-color: #e5e5e5;
            &.top,
            &.good {
                background-color: #80bd01;
                color: #fff;
            }
        }

        .title {
            float: left;
            display: inline-block;
            margin: 6px 0 0 5px;
            width: calc(100% - 230px);
            white-space: nowrap;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
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
