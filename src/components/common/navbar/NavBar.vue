<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    /* text-align: justify; */
    /* text-align: center; */

    /* background-color: red; */
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }

  .left {
    flex: 1;
    width: 60px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
  }

  .center {
    flex: 4;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    flex: 1;
    width: 60px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
  }

/*  .home-nav {
    background-color: var()
  } */
</style>
