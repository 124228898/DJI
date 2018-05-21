<template lang="html">
  <!--商品分类页页签组件-->
  <div class="series-tab">
    <SeriesTabNav></SeriesTabNav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import SeriesTabNav from "@/components/SeriesTabNav";

export default {
  components: {
    SeriesTabNav
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/SeriesTab";
</style>
