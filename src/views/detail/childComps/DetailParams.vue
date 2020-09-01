<!-- 商品参数 -->
<template>
  <div class="detail-params">
    <div class="title">参数/详情：</div>
    <div class="params-item" v-for="item in paramsInfo" :key="item.name">
      <div class="param-name">{{item.attr_name}}</div>
      <div class="param-value">{{item.attr_value}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParams',
    props: {
      paramsInfo: {
        type: Array,
        detault: []
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    border-bottom: 3px solid #CCCCCC;
    margin-bottom: 20px;
  }
  
  .title {
    padding: 20px 5px 5px 5px;
    font-weight: bold;
    font-size: 15px;
  }

  .params-item {
    height: 40px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #dadada;
  }

  .param-name {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999999;
  }

  .param-value {
    flex: 3;
    text-align: left;
    font-size: 13px;
    color: var(--color-tint);
  }
</style>
