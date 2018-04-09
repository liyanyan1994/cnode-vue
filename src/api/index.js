const API_CONFIG = {
    // 验证token正确性 GET
    login: 'https://cnodejs.org/api/v1/accesstoken',

    // 获取未读消息数 GET
    messageCount: 'https://cnodejs.org/api/v1/message/count',

    // 用户详情 GET /user/:loginname
    user: 'https://cnodejs.org/api/v1/user/',

    // 主题首页 GET
    topics: 'https://cnodejs.org/api/v1/topics',

    // 获取主题详情包括回复 GET
    topicDetail: 'https://cnodejs.org/api/v1/topic/',

    // 新建主题 POST
    newTopics: 'https://cnodejs.org/api/v1/topics',

    // 编辑主题 POST
    updateTopics: 'https://cnodejs.org/api/v1/topics/update',

    // 获取已读和未读消息 GET
    fetchMessages: 'https://cnodejs.org/api/v1/messages',

    // 标记全部已读 POST
    messageMarkAll: 'https://cnodejs.org/api/v1/message/mark_all',

    // 新建评论 POST /topic/:topic_id/replies
    replies: 'https://cnodejs.org/api/v1/topic/',

    // 取消收藏主题 POST
    cancelCollection: 'https://cnodejs.org/api/v1/topic_collect/de_collect',

    // 收藏主题 POST
    collection: 'https://cnodejs.org/api/v1/topic_collect/collect',

    // 点赞/取消点赞 POST  /reply/:reply_id/ups 为评论点赞
    like: 'https://cnodejs.org/api/v1/reply/',

    // 用户所收藏的主题 GET  /topic_collect/:loginname
    userCollections: 'https://cnodejs.org/api/v1/topic_collect/'
}

export default API_CONFIG
