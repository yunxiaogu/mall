<!-- 详情组件 -> 轮播图组件 -->
<template>
  <div class="swiper">
    <el-carousel :interval="5000" trigger="click" arrow="always" height="250px">
      <el-carousel-item v-for="item in swiperList" :key="item">
        <el-image :src="item" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'DetailSwiper',
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      swiperList: {
        type: Array,
        default () {
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

  /* 重写轮播图指示器样式，不然图片一多，指示器会出现换行 */
  .swiper>>>.el-carousel__button {
    width: 20px;
    height: 8px;
    border-radius: 5px;
  }
</style>
