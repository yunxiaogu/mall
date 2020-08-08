<!-- 推荐信息组件(位于轮播图组件下面) -->
<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link" class="item-link">
        <img :src="item.image" :alt="item.title" class="item-img">
        <div class="item-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    height: 120px;
    display: flex;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .item-link {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }

  .item-title {
    font-size: 13px;
  }
</style>
