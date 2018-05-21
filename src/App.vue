<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "assets/css/app.scss"; // 公用的css
</style>

<script>
import "@/assets/js/rem-toggle.js"; // rem换算
export default {};
</script>
