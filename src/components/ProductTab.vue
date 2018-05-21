<template lang="html">
  <!--产品详情页产品介绍页签组件-->
  <div class="product-tab" :data-inx="curInx">
    <nav class="product-tab-nav">
      <span class="item" @click="toggleTab(0)">产品概况</span>
      <span class="item" @click="toggleTab(1)">产品特色</span>
      <span class="item" @click="toggleTab(2)">常见问题</span>
    </nav>
    <div class="product-tab-content" ref="productTabContent">
      <div class="item" :class="{ active: curInx === 0 }">
        <p>这里放产品概览</p>
      </div>
      <div class="item" :class="{ active: curInx === 1 }">
        <p>这里放产品特色</p>
      </div>
      <div class="item" :class="{ active: curInx === 2 }">
        <h4>有钱真的可以为所欲为吗？</h4>
        <p>是的。</p>
     </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      curInx: 0
    };
  },
  methods: {
    // 通过传入索引切换产品介绍tab
    toggleTab(inx) {
      this.curInx = inx;
      var productTabContent = this.$refs.productTabContent;
      var item = productTabContent.querySelectorAll(".item");
      productTabContent.style.height = item[inx].offsetHeight + "px";
    }
  },
  mounted() {
    this.toggleTab(0);
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/ProductTab";
</style>
