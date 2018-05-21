<template lang="html">
  <!--商品分类页页签导航组件-->
  <nav class="series-tab-nav">
    <ul class="item-list">
      <router-link class="item" v-for="item in seriesTabNavData" :key="item" :to="item.url" tag="li" exact>
        <div class="item-pic">
          <img :src="item.pic">
        </div>
        <div class="item-name">{{ item.name }}</div>
      </router-link>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  computed: {
    // 获取分类页tab导航数据
    seriesTabNavData() {
      return this.$store.state.series.seriesTabNav;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/SeriesTabNav";
</style>
