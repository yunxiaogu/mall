<!-- 导航栏组件 -->
<template>
    <NavBar class="nav_bar">
      <div slot="left" class="icon" @click="backClick">
        <span class="iconfont icon-back"></span>
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item" class="title-item" :class="{active: currentIndex == index}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </NavBar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: 'DetailNavBar',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        // 将点击到的索引传出去
        this.$emit('itemClick', index)
      },
      // 返回点击
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .nav_bar {
    background-color: #FFFFFF;
  }

  .icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-back {
    font-size: 23px;
  }

  .title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }

  .title-item {
    flex: 1;
    text-align: center;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
