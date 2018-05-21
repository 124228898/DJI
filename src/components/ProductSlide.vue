<template lang="html">
  <!--产品图片轮播图组件-->
  <div class="product-slide">
    <swiper :options="swiperOption" ref="productSlide" v-if="test">
      <swiper-slide class="item">
        <img class="item-pic" :src="test">
      </swiper-slide>
      <swiper-slide class="item">
        <img class="item-pic" src="../assets/img/product-2.jpg">
      </swiper-slide>
      <swiper-slide class="item">
        <img class="item-pic" src="../assets/img/product-3.jpg">
      </swiper-slide>
      <swiper-slide class="item">
        <img class="item-pic" src="../assets/img/product-4.jpg">
      </swiper-slide>
      <swiper-slide class="item">
        <img class="item-pic" src="../assets/img/product-5.jpg">
      </swiper-slide>
      <swiper-slide class="item">
        <img class="item-pic" src="../assets/img/product-6.jpg">
      </swiper-slide>
      <swiper-slide class="item">
        <img class="item-pic" src="../assets/img/product-7.jpg">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

Vue.use(swiper, swiperSlide);

export default {
  props: ["test"],
  data() {
    return {
      // swiper参数
      swiperOption: {
        loop: true,
        pagination: ".swiper-pagination",
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      }
    };
  },
  computed: {
    // 获取swiper实例对象，可通过改对象调用swiper方法
    swiper() {
      return this.$refs.productSlide.swiper;
    }
  },
  watch: {
    $route(to) {
      if (to.name === "product") {
        this.swiper.slideTo(1);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../assets/css/components/ProductSlide";
</style>
