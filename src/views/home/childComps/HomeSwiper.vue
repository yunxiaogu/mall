<!-- 轮播图组件 -->
<template>
    <el-carousel :interval="5000" arrow="always" height="150px">
      <el-carousel-item v-for="item in swiperList" :key="item.title">
        <div class="img-wrap">
          <a :href="item.navigation">
            <img :src="item.image_src" alt="item.goods_id">
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      swiperList : {
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
