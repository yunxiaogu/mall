<!-- 轮播图组件 -->
<template>
    <el-carousel :interval="5000" arrow="always" height="150px">
      <el-carousel-item v-for="item in banners" :key="item.title">
        <div class="img-wrap">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      banners : {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .img-wrap {
    height: inherit;
  }

  .img-wrap img {
    width: 100%;
    /*    max-width: 100%;
    max-height: 100%; */
    height: auto;
  }
</style>
