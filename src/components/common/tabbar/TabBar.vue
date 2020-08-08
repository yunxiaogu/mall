<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  #tab-bar {
    height: 49px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: #F6F6F6;
    box-shadow: 0 -1px 3px rgba(204, 204, 204, .6);
  }

</style>
