<template lang="html">
  <!--产品组组件2-->
  <div class="product-group-2">
    <h3 class="header-title">{{ data.title }}</h3>
    <swiper class="scroll-list" :options="swiperOption" ref="scrollList">
      <swiper-slide v-for="item in data.list" :key="item" class="product" @click.native="goProduct(item)">
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
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

export default {
  props: ["data"],
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
@import "../assets/css/components/ProductGroup2";
</style>
