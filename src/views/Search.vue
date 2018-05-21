<template lang="html">
  <!--搜索页-->
  <div class="search-wrapper">
    <div class="search-wrapper-hd">
      <input class="search-input" type="text" placeholder="搜索产品" v-model="keyword" ref="searchInput">
      <button class="btn btn-close" @click="goBack">取消</button>
      <button class="btn btn-reset" @click="resetInput" v-show="keyword"></button>
    </div>
    <div class="search-wrapper-bd">
      <div class="recommended" v-show="!keyword">
        <div class="item-sub-title">推荐产品</div>
        <ul class="item-list">
          <li class="item"><a href="#">精灵 Phantom 4 Pro</a></li>
          <li class="item"><a href="#">DJI Care 换新计划（Mavic Air）</a></li>
          <li class="item"><a href="#">CrystalSky 高亮显示屏</a></li>
          <li class="item"><a href="#">"悟" Inspire 2</a></li>
          <li class="item"><a href="#">灵眸 Osmo 手机云台 2</a></li>
          <li class="item"><a href="#">禅思 Zenmuse X7</a></li>
          <li class="item"><a href="#">"御" Mavic Air</a></li>
          <li class="item"><a href="#">DJI 飞行眼镜竞速版</a></li>
        </ul>
      </div>
      <p class="tip" v-show="keyword">点击查看"{{ keyword }}"的搜索结果</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    // 返回上一页
    goBack() {
      window.history.go(-1);
    },
    // 重置表单
    resetInput() {
      this.keyword = "";
    }
  },
  activated() {
    this.$refs.searchInput.focus();
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/views/Search";
</style>
