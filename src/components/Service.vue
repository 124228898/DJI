<template lang="html">
  <!--服务组件-->
  <div class="service">
    <div class="item-sub-title">服务与支持</div>
    <div class="contact-info" :class="{ active: isContactActive }" ref="contactInfo">
      <p><b>中国大陆</b><br><a href="tel:4007000303">4007000303</a><br>周一至周日 9:00-21:00 (北京时间)</p>
    </div>
    <ul class="item-list">
      <li class="item item-email"><a href="javascript:;">邮箱</a></li>
      <li class="item item-chat"><a href="javascript:;">在线交谈</a></li>
      <li class="item item-phone"><a href="javascript:;" @click="toggleContactActive">电话</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isContactActive: false // 联系电话菜单是否打开
    };
  },
  methods: {
    // 导航列表中电话面板的打开/关闭
    toggleContactActive() {
      this.isContactActive = !this.isContactActive;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/components/Service";
</style>
