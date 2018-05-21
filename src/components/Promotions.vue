<template lang="html">
  <!--促销推广组件-->
  <div class="promotions">
    <ul class="item-list">
      <li class="item" v-for="item in promotionsData" :key="item">
        <img class="item-pic" :src="item.pic" alt="">
        <span class="item-title">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["promotionsData"]
};
</script>

<style lang="scss" rel="stylesheet" scoped>
@import "../assets/css/components/Promotions";
</style>
