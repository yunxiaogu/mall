<!-- 顶部头像组件 -->
<template>
  <div class="profile-head">
    <div class="head-wrap">
      <!-- 头像 -->
      <div class="head-img">
        <el-avatar :size="70" :src="imgUrl">
          <img :src="baseUrl" />
        </el-avatar>
      </div>
      <!-- 文字描述 -->
      <div class="head-content">
        <div>云小孤</div>
        <div>家人身体健康</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileHead',
    props: {
      imgUrl: {
        type: String,
        default () {
          return ''
        }
      },
      baseUrl: {
        type: String,
        default () {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .head-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #999999;
    border-bottom: 1px solid black;
  }

  .head-img {
    margin-top: 20px;
  }

  .head-content {
    text-align: center;
    margin-bottom: 10px;
  }
</style>
