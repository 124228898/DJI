<template lang="html">
  <!--首页轮播图组件-->
  <div class="focus-slide">
    <swiper :options="swiperOption" ref="focusSlide">
      <swiper-slide class="item" v-for="item in focusSlideData" :key="item" :style="{ color: item.color }">
        <router-link :to="'/product/' + item.id" tag="div">
          <img class="item-img" :src="item.focusPic" alt="">
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-desc">{{ item.desc }}</p>
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

Vue.use(swiper, swiperSlide);

export default {
  props: ["focusSlideData"],
  data() {
    return {
      swiperOption: {
        loop: true, // 循环播放
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.focusSlide.swiper;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../assets/css/components/FocusSlide";
</style>
