import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex, Axios);

// 计算存储在缓存中的商品数量
function totalNumber() {
  var data = JSON.parse(localStorage.getItem("shoppingCartData")) || {};
  var totalNumber = 0;
  if (data.list) {
    data.list.forEach(item => {
      totalNumber += Number(item.num);
    });
  }
  return totalNumber;
}

export default new Vuex.Store({
  state: {
    totalNumber: totalNumber(), // 购物车商品数量
    curProduct: {}, // 当前产品数据
    shoppingCart: {}, // 购物车数据
    series: {} // 系列数据对象
  },
  mutations: {
    // 添加系列页面导航数据
    addSeriesNavData(state, payload) {
      Vue.set(state.series, "seriesTabNav", payload.data);
    },
    // 添加系列页面数据
    addSeriesBdData(state, payload) {
      Vue.set(state.series, [payload.id], payload.data);
    },
    // 添加当前产品数据
    addCurProductData(state, payload) {
      Vue.set(state, "curProduct", payload.obj);
    },
    // 购物车商品数量计算
    totalNumberUpdate(state, payload) {
      state.totalNumber = payload.num;
    }
  },
  actions: {
    // 请求系列导航数据
    getSeriesNavData(context) {
      Axios.get(
        "https://www.easy-mock.com/mock/5ad98f34b550ef2b5da9a044/DJI/seriesTabNav"
      ).then(reponse => {
        context.commit("addSeriesNavData", {
          data: reponse.data.seriesTabNav
        });
      });
    },
    // 请求系列页面数据
    getSeriesBdData(context, payload) {
      Axios.get(
        "https://www.easy-mock.com/mock/5ad98f34b550ef2b5da9a044/DJI/series/" +
          payload.id
      ).then(reponse => {
        context.commit("addSeriesBdData", {
          id: payload.id,
          data: reponse.data
        });
      });
    }
  }
});
