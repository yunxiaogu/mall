<!-- 顶部导航栏 -->
<template>
  <div class="cart-navbar">
    <NavBar>
      <div slot="center">
        <div>购物车 ({{count}})</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'CartNavBar',
    components: {
      NavBar
    },
    props: {
      count: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .cart-navbar {
    /*    position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    background-color: var(--color-tint);
  }
</style>
