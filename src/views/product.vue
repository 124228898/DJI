<template lang="html">
  <!--产品页-->
  <div class="product">
    <Menu></Menu>
    <ProductSlide :test="productData.pic"></ProductSlide>
    <div class="product-info">
      <div class="product-name" v-if="productData.name">{{ productData.name }}</div>
      <div class="product-price" v-if="productData.price">¥{{ productData.price }}</div>
      <div class="product-postage" v-if="productData.postage">{{ productData.postage }}</div>
      <div class="product-instalments" v-if="productData.instalments">{{ productData.instalments }}</div>
    </div>
    <ProductTab></ProductTab>
    <Service></Service>
    <div class="product-ft">
      <p class="delivery-time" v-if="productData.deliveryTime">{{ productData.deliveryTime }}</p>
      <div class="buy-info">
        <div class="item-pic">
          <img :src="productData.pic" alt="">
        </div>
        <div class="price">
          <span>{{ productData.price }}</span>
          <span>{{ productData.discounted }}</span>
        </div>
        <router-link class="btn btn-buy" to="/shoppingCart/" tag="button" @click.native="goShoppingCart">加入购物车</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Menu from "@/components/Menu";
import Vue from "vue";
import VueRouter from "vue-router";
import ProductSlide from "@/components/ProductSlide";
import ProductTab from "@/components/ProductTab";
import Service from "@/components/Service";

Vue.use(VueRouter);

export default {
  data() {
    return {
      productData: {}
    };
  },
  components: {
    Menu,
    ProductSlide,
    ProductTab,
    Service
  },
  methods: {
    goShoppingCart() {
      var shoppingCartData =
        JSON.parse(localStorage.getItem("shoppingCartData")) || {};
      // 根据ID判断改商品是否存在于购物车中，若存在则在当前购物车中的数量+1
      shoppingCartData.list = shoppingCartData.list || [];
      for (let i = 0, len = shoppingCartData.list.length; i < len; i++) {
        if (shoppingCartData.list[i].id === this.productData.id) {
          shoppingCartData.list[i].num += 1;
          localStorage.setItem(
            "shoppingCartData",
            JSON.stringify(shoppingCartData)
          );
          return;
        }
      }
      var product = this.productData;
      product.num = 1;
      shoppingCartData.list.push(product);
      localStorage.setItem(
        "shoppingCartData",
        JSON.stringify(shoppingCartData)
      );
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.state.curProduct.id) {
        vm.productData = vm.$store.state.curProduct;
        return;
      }
      // 由于是静态模拟的数据，因此数据不存在时这里直接跳转回首页
      // 实际应该通过地址中的参数从服务器获取数据
      next("/");
    });
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/views/Product";
</style>
