<!-- 回到顶部组件 -->
<template>
  <div class="back-top">
    <img src="~assets/img/home/back-top_x64.png" alt="顶部">
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .back-top {
    width: 40px;
    height: 40px;

    position: fixed;
    right: 10px;
    bottom: 55px;
    z-index: 20;
    -webkit-transform: translateZ(0);

    /* background-color: #FFFFFF; */
    border-radius: 100%;
    border: none;
    /* box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 1); */
    overflow: hidden;

    /*    background: url(~assets/img/home/back-top_x64.png) center center no-repeat;
    background-size: cover; */
  }
</style>
