<template>
  <!--商品分类页-->
  <div class="series">
    <Menu></Menu>
    <SeriesTab></SeriesTab>
  </div>
</template>

<script type="text/ecmascript-6">
import "swiper/dist/css/swiper.css";

import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "@/components/Menu"; // 菜单
import SeriesTab from "@/components/SeriesTab"; // 产品分类页面

Vue.use(VueRouter);

export default {
  components: {
    Menu,
    SeriesTab
  },
  // 路由更新时，根据路径名称请求指定分类数据方法
  beforeRouteUpdate(to, from, next) {
    this.getSeriesBdData(to.name);
    next();
  },
  // 进入路由时，请求分类页面导航数据，并根据路径名称请求指定分类数据方法
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getSeriesNavData();
      vm.getSeriesBdData(to.name);
    });
  },
  methods: {
    // 获取导航数据
    getSeriesNavData() {
      // 数据已存在时，则直接返回
      if (this.$store.state.series.addSeriesNavData) {
        return;
      }
      // 请求分类页面导航数据
      this.$store.dispatch("getSeriesNavData");
    },
    getSeriesBdData(id) {
      // 数据已存在时，则直接返回
      if (this.$store.state.series[id]) {
        return;
      }
      // 请求分类页面指定分类数据
      this.$store.dispatch("getSeriesBdData", { id: id });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet" scoped>
@import "../assets/css/views/Series";
</style>
