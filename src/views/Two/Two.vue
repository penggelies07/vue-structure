<template>
  <div class="Two">
    <div class="Two-header">
     这是子页面，名字叫做{{name}}
    </div>
    <div class="Two-content">
      <span class='link' @click="onBack()">点我回到主页</span>
      <span class='link' @click="onRedirect()">在本页显示TwoChild的页面</span>
    </div>
    <div class="Two-footer">
      这里显示子页面内容：
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: 'Two'
    }),
    mounted () {
    },
    methods: {
      onBack () {
        this.$router.push({name: 'home'})
      },
      onRedirect () {
        this.$router.push({name: 'twoChild'})
      }
    }
  }
</script>

<style>
  .Two {
    padding: 10px;
  }
  .Two-header {
    padding: 10px;
    color: #ddd233;
  }
  .Two-content {
    padding: 10px;
  }
  .link {
    margin: 10px;
    display: inline-block;
    color: rebeccapurple;
    cursor: pointer;
  }
  .Two-footer {
    padding: 10px;
  }
</style>

