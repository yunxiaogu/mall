<!-- 商品种类切换 -->
<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
    :key="item.name" class="item-title"
    :class="{active: index === currentIndex }"
    @click="itemClick(index)"
    >
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
  }

  .item-title {
    height: 40px;
    flex: 1;
  }

  .item-title span {
    padding: 5px 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
