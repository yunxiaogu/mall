<!-- 流行组件 (推荐信息下面) -->
<template>
  <div class="popular">
    <a href="https://main.m.taobao.com/">
      <img src="~assets/img/home/popular.png" alt="popular">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'PopularView',
    props: {

    }
  }
</script>

<style scoped>
  .popular {
    height: 200px;
  }

  .popular img {
    width: 100%;
    height: 100%;
  }
</style>
