<template>
 <section class="index-section">
     <div class="topics-container message">
         <div class="new-msg">
             <div class="top">
                 <router-link to="/">主页</router-link>
                 <em> / </em>
                 <span>新消息</span>
             </div>
            <Msg :readMessages="message.hasnot_read_messages" :loading="loading"/>
         </div>
         <div class="past-msg">
             <div class="top" >已读消息</div>
              <Msg :readMessages="message.has_read_messages" :loading="loading"/>
         </div>
     </div>
    <SideBars/>
 </section>
</template>

<script>
import Msg from '@/components/msg/Msg'
import API_CONFIG from '@/api/index'
import axios from 'axios'
export default {
    name: 'name',
    data() {
        return {
            loading: true,
            message: {
                has_read_messages: [],
                hasnot_read_messages: []
            }
        }
    },
    created() {
        this.fetchMessage()
    },
    mounted() {
        if (this.$store.state.messageCount > 0) {
            axios
                .post(API_CONFIG.messageMarkAll)
                .then(res => {})
                .catch(e => e)
        }
    },
    methods: {
        fetchMessage() {
            axios
                .get(API_CONFIG.fetchMessages)
                .then(res => {
                    if (res.data.success) {
                        this.loading = false
                        this.message = res.data.data
                    }
                })
                .catch(e => {
                    this.$router.replact('/')
                })
        }
    },
    components: { Msg }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/_variable.scss';
.message {
    .top {
        padding: 10px 15px;
        background-color: $boxTopColor;
        a {
            color: #80bd01;
            &:hover {
                text-decoration: underline;
            }
        }
        em {
            color: #ccc;
        }
        span {
            color: #999;
        }
    }
    .past-msg {
        margin-top: 15px;
    }
}
</style>
