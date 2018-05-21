<template lang="html">
  <!--产品组组件1-->
  <div class="product-group-1">
    <h3 class="header-title">{{ data.title }}</h3>
    <div class="product-tab">
      <ul class="product-tab-nav" v-if="data.list.length > 1">
        <li class="item" :class="{active: index === curProductIndex}" v-for="(classify, index) in data.list" :key="classify" @click="toggleProductTabBdList(index)">{{ classify.name }}</li>
      </ul>
      <div class="product-tab-bd">
        <ul class="product-list" v-for="(classifyList, index) in data.list" :key="classifyList" v-show="curProductIndex === index">
          <router-link class="product" v-for="item in classifyList.list" :key="item" :to="'/product/' + item.id" tag="li" @click.native="goProduct(item)">
            <div class="product-pic">
              <img :src="item.pic" alt="">
            </div>
            <div class="product-info">
              <b class="product-name">{{ item.name }}</b>
              <span class="product-price">{{ item.price }}</span>
              <span class="product-remarks">{{ item.remarks }}</span>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["data"],
  data() {
    return {
      curProductIndex: 0
    };
  },
  methods: {
    // 通过
    toggleProductTabBdList(index) {
      this.curProductIndex = index;
    },
    goProduct(obj) {
      this.$store.commit("addCurProductData", {
        obj: obj
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/ProductGroup1";
</style>
