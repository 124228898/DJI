<template lang="html">
  <!--购物车页-->
  <div class="shopping-cart">
    <Menu></Menu>
    <div v-if="shoppingCartData.list.length">
      <div class="shopping-cart-hd">
        <button class="btn btn-back" @click="goBack">&lt;继续购物</button>
        <button class="btn btn-edit" @click="toggleEdit">{{ isEdit ? '完成' : '编辑' }}</button>
      </div>
      <div class="shopping-cart-bd">
        <ul class="shopping-cart-list">
          <li class="item" v-for="item in shoppingCartData.list" :key="item">
            <div class="item-pic"><img :src="item.pic" alt=""></div>
            <div class="item-info">
              <div class="item-name">{{ item.name }}</div>
              <div class="item-price">¥ {{ item.price }}</div>
              <div class="item-delivery-time">{{ item.deliveryTime }}</div>
            </div>
            <div class="item-control">
              <div class="btn btn-cut" @click="cutNum(item.id)"></div>
              <span class="num">{{ item.num }}</span>
              <div class="btn btn-add" @click="addNum(item.id)"></div>
            </div>
            <button class="item-remove" v-show="isEdit" @click="removeItem(item.id)">删除</button>
          </li>
        </ul>
      </div>
      <div class="shopping-cart-ft">
        <div class="total">
          <p class="total-info">
            <span class="total-num">{{ totalNumber }}个商品</span>
            <span class="total-price">¥ {{ totalPrice }}</span>
          </p>
          <p class="remarks">订单满 ¥500 即可优享分期支付</p>
          <button class="btn btn-submit">去结算</button>
        </div>
      </div>
    </div>
    <div v-if="!shoppingCartData.list.length">
      <div class="shopping-cart-hd">
        <button class="btn btn-back" @click="goBack">&lt;继续购物</button>
      </div>
      <div class="shopping-cart-bd">
        <div class="shopping-cart-empty">
          <p class="tip">购物车为空</p>
          <i class="icon icon-shopping-cart"></i>
        </div>
      </div>
      <div class="shopping-cart-ft">
        <button class="btn btn-back" @click="goBack">继续购物</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "@/components/Menu";

Vue.use(VueRouter);

export default {
  data() {
    return {
      isEdit: false, // 是否处于编辑状态
      shoppingCartData:
        JSON.parse(localStorage.getItem("shoppingCartData")) || {} // 购物车数据
    };
  },
  components: {
    Menu // 导航组件
  },
  computed: {
    // 总价
    totalPrice() {
      var totalPrice = 0;
      this.shoppingCartData.list.forEach(item => {
        totalPrice += Number(item.num) * Number(item.price);
      });
      return totalPrice;
    },
    // 总数
    totalNumber() {
      var totalNumber = 0;
      this.shoppingCartData.list.forEach(item => {
        totalNumber += Number(item.num);
      });
      // 将累计好的商品数量添加到store中
      this.$store.commit("totalNumberUpdate", {
        num: totalNumber
      });
      return totalNumber;
    }
  },
  created() {
    // 购物车列表数据
    this.shoppingCartData.list = this.shoppingCartData.list || [];
  },
  watch: {
    // 进入购物车时，默认关闭编辑状态，并重新取得购物车数据
    $route(to) {
      if (to.name === "shoppingCart") {
        this.isEdit = false;
        this.shoppingCartData =
          JSON.parse(localStorage.getItem("shoppingCartData")) || {};
      }
    }
  },
  methods: {
    // 编辑状态下的删除购物车方法
    removeItem(id) {
      // 遍历购物车中的数据，根据传入的ID值来删除指定数据
      this.shoppingCartData.list.forEach((item, inx) => {
        if (item.id == id) {
          this.shoppingCartData.list.splice(inx, 1);
          this.saveData();
        }
      });
      // 购物车中没有数据时，修改$store中购物车总数为0
      if (this.shoppingCartData.list.length === 0) {
        this.$store.commit("totalNumberUpdate", {
          num: 0
        });
      }
    },
    // 切换编辑状态
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    // 减少数量
    cutNum(id) {
      this.shoppingCartData.list.forEach(item => {
        if (item.id == id && item.num > 1) {
          Vue.set(item, "num", Number(item.num) - 1);
          this.saveData();
        }
      });
    },
    // 增加数量
    addNum(id) {
      this.shoppingCartData.list.forEach(item => {
        if (item.id == id && item.num < 99) {
          item.num = Number(item.num) + 1;
          this.saveData();
        }
      });
    },
    // 保存数据，对购物车进行操作后，需要重新保存数据到本地缓存中
    saveData() {
      localStorage.setItem(
        "shoppingCartData",
        JSON.stringify(this.shoppingCartData)
      );
    },
    // 返回上一页
    goBack() {
      window.history.go(-1);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/css/views/ShoppingCart";
</style>
