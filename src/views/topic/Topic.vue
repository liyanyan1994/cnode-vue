<template>
  <section class="topic index-section">
      <div class="topics-container">
          <div class="detail">
              <div class="loading" v-show="loading">Loading...</div>
              <div class="topic-top">
                  <div class="topic-title">
                      <span class="tag">置顶</span>
                      <h1>请不要再发薅羊毛帖子</h1>
                  </div>
                  <div class="topic-bottom">
                      <div class="topic-info">
                            <span>• 发布于 3个小时前 • 作者 </span>
                            <router-link to="/user">JackSonTian</router-link>
                            <span> • 次浏览 •最后一次编辑是 10分十分钟前 • 来自分享</span>
                      </div>
                      <div class="collection user-select-none">
                          <button>收藏</button>
                      </div>
                      <div class="operation-edit">
                          <router-link to="/release">
                            <Icon type="compose"  title="编辑"/>
                          </router-link>
                      </div>
                  </div>
              </div>
              <div class="content markdown-body">RT</div>
          </div>
          <div class="reply">
              <div class="reply-count">4 回复</div>
              <ul>
                  <li>
                      <div class="avatar">
                          <router-link to="/user">
                            <img src="../../assets/images/github.svg" alt="头像"/>
                          </router-link>
                      </div>
                      <div class="reply-right">
                          <div class="reply-author">
                              <router-link to="/user">Atian12</router-link>
                              <span>1楼 · 3小时前</span>
                              <strong>作者</strong>
                          </div>
                          <div class="operation user-select-none">
                              <div>
                                  <Icon type="ios-heart"></Icon>
                                  <em>3</em>
                              </div>
                              <div>
                                  <Icon type="reply"></Icon>
                              </div>
                          </div>
                      </div>
                      <div class="reply-content markdown-body">okkkk wo juede hao</div>
                  </li>
              </ul>
          </div>
      </div>
      <SideBars/>
  </section>
</template>

<script>
export default {
  name: 'name',
  data () {
    return {
      loading: false
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.topics-container{
    .detail{
        position: relative;
        background-color: #fff;
        min-height: 300px;
        .loading{
            position: absolute;
            z-index: 666;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding-top: 100px;
            background-color: #fff;
            text-align: center;
        }
        .topic-top{
            padding: 15px 10px;
            border-bottom: 1px solid #eee;
        }
        .topic-title{
            overflow: hidden;
            .tag{
                float: left;
                margin-top: 3px;
                padding: 2px 4px;
                color: #fff;
                background-color: #80bd01;
                font-size: 12px;
                border-radius: 3px;
                font-weight: bold;
                white-space: nowrap;
            }
            h1{
                float: left;
                width: calc(100% - 50px);
                margin: -4px 5px 0 10px;
                font-weight: bold;
                color: #000;
                font-size: 22px;
            }
        }
        .topic-bottom{
            margin-top: 10px;
            span,a{
                font-size: 12px;
            }
            a{
                color: #333;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .collection{
            text-align: right;
            button{
                position: relative;
                padding: 5px 10px;
                background-color: #80bd01;
                color: #fff;
                border:none;
                font-weight: 500;
                border-radius: 3px;
                &:after{
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 3px;
                    background: #000;
                    opacity: 0;
                }
                &:active:after{
                    opacity: .2;
                }
            }
        }
        .operation-edit{
            i{
                cursor: pointer;
                font-size: 22px;
            }
        }
        .content{
            padding: 10px 20px;
        }
    }
    .reply{
        margin-top: 15px;
        border-radius: 3px;
        .reply-count{
            padding: 10px 15px;
            background-color: #f6f6f6;
        }
        li{
            padding: 10px 10px 30px 10px;
            overflow: hidden;
            background-color: #fff;
        }
        .avatar{
            float: left;
            img{
                width: 30px;
                height: 30px;
                background-color: #f7f7f7;
                object-fit: cover;
                border-radius: 3px;
            }
        }
        .reply-right{
            float: left;
            width: calc(100% - 40px);
            overflow: hidden;
            margin: 0 0 0 10px;
        }
        .reply-author{
            float: left;
            a{
                font-size: 12px;
                color: #000;
            }
            span{
                margin-left: 5px;
                font-size: 12px;
                color: #08c;
            }
            strong{
                margin-left: 5px;
                font-size: 12px;
                background-color: #80bd01;
                color: #fff;
                padding: 1px;
                border-radius: 1px;
                font-weight: bold;
            }
        }
        .operation{
            float: right;
            i{
                cursor: pointer;
                font-size: 16px;
                vertical-align: middle;
            }
            em{
                margin-left: 3px;
            }
            >div{
                float: left;
                margin-left: 7px;
            }
        }
        .reply-content{
            clear: left;
            padding-left: 40px;
        }
    }
}
</style>
