import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/Index'
import User from '@/views/user/User'
import Collections from '@/views/collections/Collections'
import Topic from '@/views/topic/Topic'
import NoMatch from '@/views/404/404'
import Messages from '@/views/message/Message'
import Release from '@/views/release/Release'

import HelloWorld from '@/components/HelloWorld/'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: Index
        },
        {
            path: '/helloword',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/user/:loginname',
            name: 'User',
            component: User
        },
        {
            path: '/collections/:loginname/collections',
            name: 'Collections',
            component: Collections
        },
        {
            path: '/topic/:id',
            name: 'Topic',
            component: Topic
        },
        {
            path: '/messages',
            name: 'Messages',
            component: Messages
        },
        {
            name: 'Release',
            path: '/release/:id',
            component: Release
        },
        {
            path: '*',
            name: 'NotMatch',
            component: NoMatch
        }
    ]
})
