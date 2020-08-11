<!-- 推荐信息组件(位于轮播图组件下面) -->
<template>
  <div class="recommend">
    <div v-for="item in cateList" :key="item.sort" class="recommend-item">
      <a :href="item.navigation_url" class="item-link">
        <img :src="item.image_src" :alt="item.name" class="item-img">
        <div class="item-title" :class="{'title-hidden': titleHidden }">{{item.name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      cateList: {
        type: Array,
        default () {
          return []
        }
      },
      titleHidden: {
        type: Boolean,
        default() {
          return false
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

  .title-hidden {
    display: none;
  }
</style>
