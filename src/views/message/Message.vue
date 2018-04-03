<template>
 <section class="index-section">
     <div class="topics-container message">
         <div class="new-msg">
             <div class="top">
                 <router-link to="/">主页</router-link>
                 <em> / </em>
                 <span>新消息</span>
             </div>
            <Msg/>
         </div>
         <div class="past-msg">
             <div class="top">已读消息</div>
              <Msg/>
         </div>
     </div>
    <SideBars/>
 </section>
</template>

<script>
import Msg from '@/components/msg/Msg'
export default {
    name: 'name',
    data() {
        return {}
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
