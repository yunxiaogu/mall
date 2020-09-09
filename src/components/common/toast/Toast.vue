<!-- 弹窗组件 -->
<template>
  <div class="toast" v-show="show">
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    props: {
      msg: '',
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #FFFFFF;
    padding: 8px 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: rgba(0, 0, 0, .7);
  }
</style>
