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
    topicDetail: 'https://cnodejs.org/api/v1/topic/'
}

export default API_CONFIG
