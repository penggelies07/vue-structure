<template>
  <div class="Home">
    <div class="Home-header">
      这是主页，名字叫做{{name}}
      <button @click="onChangeCN()">中文</button>
      <button @click="onChangeEN()">英文</button>
    </div>
    <div class="Home-content">
      <span class="link" @click="onRedirect('one')">跳转去One页面</span>
      <span class="link" @click="onRedirect('two')">跳转去Two页面</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: ''
    }),
    mounted () {
      this.name = 'Home'
    },
    methods: {
      onChangeCN () {
        const name = '主页'
        this.name = name
      },
      onChangeEN () {
        const name = 'Home'
        this.name = name
      },
      onRedirect (name) {
        this.$router.push({name})
        // this.$router.push({name: 'one'})
      }
    }
  }
</script>

<style>
  .Home {
    color: #ff7722;
  }
  .Home-header {
    padding: 10px;
  }
  .Home-content {
    padding: 10px;
  }
  .link {
    margin: 10px;
    display: inline-block;
    color: rebeccapurple;
    cursor: pointer;
  }
</style>

