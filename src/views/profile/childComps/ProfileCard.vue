<!-- 卡片组件 -->
<template>
  <div class="profile-card" ref="profileCard">
    <!-- 卡片图标 -->
    <div class="icon-wrap">
      <div class="icon">
        <img :src="iconUrl">
      </div>
      <!-- <el-avatar></el-avatar> -->
    </div>
    <!-- 卡片名称 -->
    <div class="card-title">
      <span>{{title}}</span>
    </div>
    <!-- 卡片简介 -->
    <div class="card-content">
      <div class="content">
        <span>{{content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileCard',
    props: {
      iconUrl: {
        type: String,
        default () {
          return 'assets/img/profile/icon_report.png'
        }
      },
      title: {
        type: String,
        default () {
          return '暂无'
        }
      },
      content: {
        type: String,
        default () {
          return '暂无'
        }
      }
    },
    mounted() {
      this.$refs.profileCard.style.height = this.height
      this.$refs.profileCard.style.width = this.width
    }
  }
</script>

<style scoped>
  .profile-card {
    width: 120px;
    height: 80px;
    /*    width: 100%;
    height: 100%; */
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    border-radius: 5px;
    line-height: 22px;
    background-color: #FFFFFF;
    overflow: hidden;
  }

  .icon-wrap {
    flex: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }

  .icon-wrap .icon {
    width: 25px;
    height: 25px;
    border-radius: 5px;
    overflow: hidden;
  }

  .card-title {
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }

  .card-content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    color: #999999;
    overflow: hidden;
  }

  .card-content .content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
