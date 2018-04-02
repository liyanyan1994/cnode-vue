<template>
  <div class="footers">
    <div class="footers-box">
        <div class="source-code-add"></div>
        <div class="vendor">
            <ul>
                <li class="cnode">
                    <span>CNode社区提供API</span>
                    <a href="https://cnodejs.org" target="_blank" rel="noopener noreferrer">
                        <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode" />
                    </a>
                </li>
                <li class="cnode">
                    <span>github-pages提供网站托管</span>
                     <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/images/github.svg" alt="github" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss">
@import '../../assets/scss/_variable.scss';
.footers {
  background-color: #fff;
  padding: 25px 0 35px 0;
  .footers-box {
    width: $width;
    margin: 0 auto;
    .vendor {
      li {
        float: left;
        margin: 15px 30px 0 0;
        span {
          margin-right: 10px;
          color: #333;
        }
      }
      .cnode {
        img {
          width: 100px;
        }
      }
    }
  }
}
</style>
