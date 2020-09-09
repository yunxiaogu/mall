<!-- 个人信息组件 -->
<template>
  <div class="profile">
    <!-- 顶部区域 -->
    <ProfileHead :imgUrl="imgUrl" :baseUrl="baseUrl"></ProfileHead>
    <!-- 底部区域 -->
    <ProfileBody :cards="cardList"></ProfileBody>
  </div>
</template>

<script>
  import ProfileHead from "./childComps/ProfileHead.vue"
  import ProfileBody from "./childComps/ProfileBody.vue"

  export default {
    name: 'Profile',
    components: {
      ProfileHead,
      ProfileBody
    },
    data() {
      return {
        imgUrl: "https://s1.ax1x.com/2020/09/05/wE8HBD.th.jpg",
        baseUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        cardList: [{
          iconUrl: 'https://s1.ax1x.com/2020/09/05/wEKSwn.png',
          title: '文档',
          content: '微云/在线文档等'
        }, {
          iconUrl: 'https://s1.ax1x.com/2020/09/05/wEKSwn.png',
          title: '收藏',
          content: '本地图片链接语音'
        }, {
          iconUrl: 'https://s1.ax1x.com/2020/09/05/wEKSwn.png',
          title: '待办',
          content: '新建待办事项'
        }, {
          iconUrl: 'https://s1.ax1x.com/2020/09/05/wEKSwn.png',
          title: '邮箱',
          content: '邮件收发'
        }, {
          iconUrl: 'https://s1.ax1x.com/2020/09/05/wEKSwn.png',
          title: '电话',
          content: '快捷联系好友'
        }]
      }
    }
  }
</script>

<style scoped>
  .profile {
    height: 100vh;
    background-color: #F2F2F2;
  }
</style>
