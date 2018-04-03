<template>
  <div id="app">
      <div class="go-top user-select-none">
          <p>回</p>
          <p>到</p>
          <p>顶</p>
          <p>部</p>
      </div>
    <div class="router-view">
        <Headers/>
        <router-view/>
        <Footers/>
    </div>
  </div>
</template>

<script>
import Headers from './components/headers/Headers'
import Footers from './components/footers/Footers'
export default {
    name: 'App',
    components: { Headers, Footers },
    created() {
        this.$store.dispatch('checkLogin')
    }
}
</script>

<style lang="scss">
.go-top {
    position: fixed;
    z-index: 666;
    bottom: 109px;
    right: 0px;
    padding: 5px 10px;
    border-radius: 12px 0 0 12px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        color: #f6f6f6;
    }
    p {
        color: #666;
    }
}
.router-view {
    display: flex;
    flex-direction: column;
}
</style>
