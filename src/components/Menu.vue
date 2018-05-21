<template>
  <!--顶部菜单组件-->
  <div class="menu">
    <div class="menu-hd">
      <button class="btn btn-menu" @click="toggleMenuActive" :class="{ 'active': isMenuActive }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <router-link class="logo" to="/" tag="h1" @click.native="closeMenuActive">大疆商城手机版</router-link>
      <transition name="menuToggle">
        <div class="btn-troup" v-show="!isMenuActive">
          <router-link class="btn btn-search" to="/search" tag="button">搜索</router-link>
          <router-link class="btn btn-shopping-cart" to="/shoppingCart" tag="button">
            <i>{{ goodNum }}</i>
          </router-link>
        </div>
      </transition>
    </div>
    <!--菜单列表-->
    <transition name="menuToggle">
      <div class="menu-bd" ref="menuBd" v-show="isMenuActive">
        <div class="content">
          <div class="menu-list">
            <router-link class="item" to="#" tag="div">登陆</router-link>
            <div class="item-sub-title">商品分类</div>
            <ul class="series-list">
              <router-link  @click.native="closeMenuActive" class="item" v-for="item in series" :key="item" :to="item.href" tag="li"><img :src="item.iconSrc">{{ item.name }}</router-link>
            </ul>
            <div class="item-sub-title">优惠</div>
            <router-link class="item" to="#" tag="div">教育优惠</router-link>
          </div>
          <Service></Service>
          <div class="change-country">更改国家或地区</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import VueRouter from "vue-router";
import BScroll from "better-scroll";
import Service from "@/components/Service";

Vue.use(VueRouter);

export default {
  data() {
    return {
      isMenuActive: false, // 导航菜单是否打开状态
      menuBScroll: "", // 导航菜单中的better-scroll实例
      shoppingCartData:
        JSON.parse(localStorage.getItem("shoppingCartData")) || {}, // 购物车数据
      series: [
        {
          // 导航菜单中商品分类数据
          href: "/series/spark",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/9f3af3e0-4e5c-0135-9c73-12528100fbe3/ic_spark.svg",
          name: "晓 Spark"
        },
        {
          href: "/series/mavic",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/71f33370-e27c-0135-7c6f-12460cf440ec/ic_MavicAir2_1x.svg",
          name: "御 Mavic"
        },
        {
          href: "/series/phantom",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/7a7b37f0-4e5a-0135-ccb5-12530322f90d/icon_80______ic_p4p.svg",
          name: "精灵 Phantom"
        },
        {
          href: "/series/osmo",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/a3f6c2e0-4e5c-0135-ccc2-12530322f90d/ic_osmo.svg",
          name: "灵眸 Osmo"
        },
        {
          href: "/series/goggles",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/7ebf68b0-4e5a-0135-9c66-12528100fbe3/icon_80______ic_goggles.svg",
          name: "DJI 飞行眼镜"
        },
        {
          href: "/series/inspire",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/83b0a330-4e5a-0135-ccb6-12530322f90d/icon_80______ic_in2.svg",
          name: "悟 Inspire"
        },
        {
          href: "/series/ronin",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/a8057f90-4e5c-0135-9c74-12528100fbe3/ic_R2.svg",
          name: "如影 Ronin"
        },
        {
          href: "/series/industrial",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/f5e8ab40-fe81-0135-d512-12530322f90d/ic_MG1_front_48_1_.svg",
          name: "农业植保"
        },
        {
          href: "/series/tello",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/78a5ed60-d354-0135-d3dc-12530322f90d/Guava_1x.svg",
          name: "睿炽科技丨特洛"
        },
        {
          href: "/series/service",
          iconSrc:
            "https://stormsend1.djicdn.com/stormsend/uploads/abebec10-4e5c-0135-ccc3-12530322f90d/ic_service.svg",
          name: "增值服务"
        }
      ]
    };
  },
  computed: {
    goodNum() {
      return this.$store.state.totalNumber;
    }
  },
  methods: {
    toggleMenuActive() {
      // 导航打开/关闭
      this.isMenuActive = !this.isMenuActive;
      // 导航打开时
      if (this.isMenuActive === true) {
        // 页面滚动至顶部
        this.menuBScroll.scrollTo(0, 0, 0);
        // 重置better-scroll
        setTimeout(
          function() {
            this.menuBScroll.refresh();
          }.bind(this),
          200
        );
      }
    },
    closeMenuActive() {
      // 关闭导航
      this.isMenuActive = false;
    }
  },
  mounted() {
    // 实例化better-scroll
    this.menuBScroll = new BScroll(this.$refs.menuBd, {
      click: true, // 可点击
      swipeBounceTime: 200, // 快速滑动松手后超出边缘回弹动画时间
      bounceTime: 500 // 边缘拖动松手后回弹动画的动画时长
    });
  },
  components: {
    Service
  }
};
</script>

<style lang="scss" rel="stylesheet" scoped>
@import "../assets/css/components/Menu";
</style>
