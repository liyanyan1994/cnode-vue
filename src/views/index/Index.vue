<template>
  <section class="index-section">
      <div class="section-container topics-container">
       <nav class="nav">
           <router-link to="/" class="active">全部</router-link>
           <router-link to="/">分享</router-link>
           <router-link to="/">问答</router-link>
           <router-link to="/">招聘</router-link>
           <router-link to="/">客户端测试</router-link>
       </nav>
       <div class="topics-list">
            <Lists/>
       </div>
       <div class="panination-box">
           <Page :total="total" :page-size="40" :current.sync="page"/>
       </div>
      </div>
      <SideBars/>
  </section>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      total: 999, // 总条数
      page: 1 // 当前页
    }
  }
}
</script>

<style scoped lang="scss">
.index-section {
  .section-container {
    background-color: #fff;
    box-shadow: 0 0 8px #ccc;
    .nav {
      padding: 10px 0;
      background-color: #f6f6f6;
      border-radius: 5px 5px 0 0;
      a {
        padding: 2px 5px;
        margin-left: 15px;
        color: #80bd01;
        &.active {
          background-color: #80bd01;
          color: #fff;
        }
      }
    }
    .topics-list{
        position: relative;
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        min-height: 1000px;
    }
    .panination-box{
        margin:15px 0 20px 10px;
    }
  }
}
</style>
