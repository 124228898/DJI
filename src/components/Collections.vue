<template lang="html">
  <!--首页产品组组件-->
  <div class="collections">
    <SeriesScrollList v-for="(item, index) in collectionsData" :key="item" :series="collectionsData[index]"></SeriesScrollList>
  </div>
</template>

<script type="text/ecmascript-6">
import SeriesScrollList from "@/components/SeriesScrollList";

export default {
  props: ["collectionsData"],
  components: {
    SeriesScrollList
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/Collections";
</style>
