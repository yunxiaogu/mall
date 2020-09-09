<!-- 底部内容组件 -->
<template>
  <div class="profile-bofy">
    <div class="body-wrap">
      <ProfileCard
        v-for="card in cards"
        :key="card.title"
        :iconUrl="card.iconUrl"
        :title="card.title"
        :content="card.content"></ProfileCard>
    </div>
  </div>
</template>

<script>
  import ProfileCard from "./ProfileCard.vue"

  export default {
    name: 'ProfileBody',
    components: {
      ProfileCard
    },
    props: {
      cards: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .body-wrap {
    /* width: 95vw; */
    /* margin: 0 auto; */
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    align-items: center;
    overflow: hidden;
  }
</style>
