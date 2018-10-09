<template>
  <div id="app">
    <div class="btn-content">
      <router-link to="/start">开始
      </router-link>
      <router-link to="/home">点餐
      </router-link>
      <router-link to="/cart">购物车
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎使用vue.js'
    }
  }
}
</script>

<style>
.btn-content {
  position: flex;
  botttom: 1.25rem;
}
</style>
