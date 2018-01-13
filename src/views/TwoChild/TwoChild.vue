<template>
  <div class="TwoChild">
    <div class="TwoChild-header">
     这是子子页面，名字叫做{{name}}
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: 'TwoChild'
    }),
    mounted () {},
    methods: {}
  }
</script>

<style>
  .TwoChild {
    padding: 10px;
  }
  .TwoChild-header {
    padding: 10px;
    color: #c933dd;
  }
  .TwoChild-content {
    padding: 10px;
    display: inline-block;
    color: rebeccapurple;
    cursor: pointer;
  }
</style>

