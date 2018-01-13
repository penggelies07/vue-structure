<template>
  <div class="One">
    <div class="One-header">
      <p>这是子页面，名字叫做{{name}}</p>
      <Nav/>
    </div>
    <div class="One-content">
      <span @click="onBack()">点我回到主页</span>
    </div>
  </div>
</template>

<script>
  import Nav from '../../components/Nav'
  export default {
    components: {Nav},
    data: () => ({
      name: 'One'
    }),
    mounted () {
    },
    methods: {
      onBack () {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style>
  .One {
    padding: 10px;
  }
  .One-header {
    padding: 10px;
    color: #ddd233;
  }
  .One-content {
    padding: 10px;
    display: inline-block;
    color: rebeccapurple;
    cursor: pointer;
  }
</style>

