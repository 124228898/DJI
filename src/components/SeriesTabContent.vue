<template lang="html">
  <!--商品分类页页签内容组件-->
  <div class="series-tab-content">
    <div class="content" v-if="seriesData">
      <div class="focus-banner" :style="{ backgroundImage: 'url(' + seriesData.focus.pic + ')' }">
        <div class="focus-banner-name">{{ seriesData.focus.title }}</div>
      </div>
      <ProductGroup1 :data="seriesData.productGroup1Data" v-if="seriesData.productGroup1Data.list.length"></ProductGroup1>
      <ProductGroup2 :data="seriesData.productGroup2Data" v-if="seriesData.productGroup2Data.list.length"></ProductGroup2>
      <ProductGroup1 :data="seriesData.productGroup3Data" v-if="seriesData.productGroup3Data.list.length"></ProductGroup1>
    </div>
    <transition name="loading">
      <Loading v-show="!seriesData"></Loading>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import ProductGroup1 from "@/components/ProductGroup1"; // 分类列表1
import ProductGroup2 from "@/components/ProductGroup2"; // 分类列表2
import Loading from "@/components/Loading";

export default {
  computed: {
    // 获取分类页tab内容数据
    seriesData() {
      var obj = this.$store.state.series;
      return obj[this.$route.name];
    }
  },
  components: {
    ProductGroup1,
    ProductGroup2,
    Loading
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/SeriesTabContent";
</style>
