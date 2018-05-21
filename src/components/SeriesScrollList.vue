<template lang="html">
  <!--商品分类板块的滚动组件-->
  <div class="series">
    <div class="series-hd">{{ series.title }}<router-link class="more" :to="series.moreLink" tag="a">更多</router-link></div>
    <div class="series-bd">
      <swiper class="scroll-list scroll-list-1" :options="swiperOption" ref="scrollList">
        <swiper-slide v-for="item in series.seriesList" :key="item" class="product" @click.native="goProduct(item)">
          <router-link :to="'/product/' + item.id" tag="div">
            <div class="product-pic">
              <img :src="item.pic">
            </div>
            <div class="product-name">{{ item.name }}</div>
            <div class="product-price">{{ item.price }}</div>
            <div class="product-remarks">{{ item.remarks }}</div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import VueRouter from "vue-router";

import { swiper, swiperSlide } from "vue-awesome-swiper";

Vue.use(VueRouter, swiper, swiperSlide);

export default {
  props: ["series"],
  data() {
    return {
      // swiper参数
      swiperOption: {
        freeMode: true,
        slidesPerView: "auto"
      }
    };
  },
  computed: {
    // 获取swiper实例对象，可通过改对象调用swiper方法
    swiper() {
      return this.$refs.scrollList.swiper;
    }
  },
  methods: {
    goProduct(obj) {
      this.$store.commit("addCurProductData", {
        obj: obj
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/SeriesScrollList";
</style>
