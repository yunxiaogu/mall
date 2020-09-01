<!-- 评论区组件 -->
<template>
  <div class="comment">
    <!-- 评论区头部 -->
    <div class="c_head">
      <div class="title">评论区</div>
      <div class="enter">更多<span class="iconfont icon-more_android"></span></div>
    </div>
    <!-- 评论区内容 -->
    <div class="c_body" v-for="item in comments" :key="item.user_name">
      <div class="c_wrap">
        <!-- 头像、用户名 -->
        <div class="cm_top">
          <div class="user_icon">
            <img :src="item.user_icon" :alt="item.user_name">
          </div>
          <div class="user_name">{{item.user_name}}</div>
        </div>
        <!-- 评论内容 -->
        <div class="cm_content">
          <p>{{item.c_text}}</p>
        </div>
        <!-- 评论图片 -->
        <div class="cm_img">
          <div class="img_item" v-for="pic in item.c_pics" :key="pic">
            <img :src="pic" alt="暂无图片">
          </div>
        </div>
        <!-- 评论信息 -->
        <div class="cm_bottom">评论时间：{{item.c_time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailComment',
    props: {
      comments: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

  .c_head {
    display: flex;
    padding: 0 10px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
  }

  .c_body {
    margin-bottom: 10px;
    border-bottom: 3px solid #CCCCCC;
  }

  /* 头像、用户名 */
  .cm_top {
    height: 45px;
    display: flex;
    margin-bottom: 5px;
  }

  .user_icon {
    width: 45px;
    height: 45px;
    display: flex;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px #999999;
    overflow: hidden;
  }

  .user_icon img {
    height: auto;
    width: 100%;
  }

  .user_name {
    flex: 1;
    display: flex;
    padding: 0 10px;
    align-items: center;
    font-size: 14px;
  }

  /* 评论内容 */
  .cm_content {
    /* height: 70px; */
    /* line-height: 18px; */
    margin: 5px 10px;
    font-size: 13px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-indent:20px
  }

  /* 评论图片 */
  .cm_img {
    height: 60px;
    margin: 5px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .cm_img .img_item {
    width: 45px;
    height: 45px;
    margin: 5px;
    overflow: hidden;
  }

  .cm_img .img_item img {
    height: 100%;
    width: 100%;
  }

  /* 评论时间 */
  .cm_bottom {
    margin: 0 10px;
    padding-bottom: 10px;
    font-size: 12px;
    color: #999999;
  }
</style>
