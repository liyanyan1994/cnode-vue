<template>
  <section class="user-select-none no-match">
      <div>
          <img src="../../assets/images/not-match.gif" alt="未匹配" class="pointer-events-none">
          <div class="page-txt">页面不见了！</div>
          <div class="go">
              <router-link to="/">首页</router-link>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'NoMatch'
}
</script>

<style scoped lang="scss">
.no-match{
    padding-top: 30px;
    text-align: center;
    display: flex;
    display: -webkit-flex;
    display: box;
    display: -webkit-box;
    justify-content: center;
    align-items: flex-start;
    -webkit-box-pack: center;
    -webkit-box-align: start;

.page-txt{
        padding: 10px 0;
        border: 1px solid #ddd;
        // background-color: #f5f5f5;
    }
    .go{
        margin-top: 15px;
        span{
            cursor: pointer;
        }
    }
}
</style>
