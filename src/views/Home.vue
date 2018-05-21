<template>
  <!--首页-->
  <div class="home">
    <Menu></Menu>
    <div class="main" v-show="post">
      <FocusSlide :focusSlideData="focusSlideData" v-if="focusSlideData"></FocusSlide>
      <Promotions :promotionsData="promotionsData" v-if="promotionsData"></Promotions>
      <Collections :collectionsData="collectionsData" v-if="collectionsData"></Collections>
      <router-link class="btn btn-home-more" to="/series/spark" tag="button">浏览全部商品</router-link>
      <Footer></Footer>
    </div>
    <transition name="loading">
      <Loading v-if="!post"></Loading>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import "swiper/dist/css/swiper.css";

import Vue from "vue";
import VueRouter from "vue-router";
import Axios from "axios";
import Menu from "@/components/Menu"; // 菜单
import FocusSlide from "@/components/FocusSlide"; // 轮播图切换
import Promotions from "@/components/Promotions"; // 推广板块
import Collections from "@/components/Collections"; // 分类列表
import Footer from "@/components/Footer"; // 页脚
import Loading from "@/components/Loading";

Vue.use(VueRouter, Axios);

export default {
  data() {
    return {
      post: false, // 是否已经加载数据
      focusSlideData: [], // 焦点图数据
      promotionsData: [], // 推广板块数据
      collectionsData: [] // 分类列表数据
    };
  },
  components: {
    Menu,
    FocusSlide,
    Promotions,
    Collections,
    Footer,
    Loading
  },
  beforeRouteEnter(to, from, next) {
    // 进入路由前，获取首页数据
    next(vm => {
      vm.getData();
    });
  },
  methods: {
    getData() {
      // 已请求过数据时直接返回
      if (this.post) {
        return;
      }
      // 获取首页数据
      Axios.get(
        "https://www.easy-mock.com/mock/5ad98f34b550ef2b5da9a044/DJI/home"
      )
        .then(reponse => {
          this.post = true;
          this.focusSlideData = reponse.data.focusSlideData;
          this.promotionsData = reponse.data.promotionsData;
          this.collectionsData = reponse.data.collectionsData;
        })
        .catch(() => {
          this.post = false;
          alert("数据请求失败");
        });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet" scoped>
@import "../assets/css/views/Home";
</style>
