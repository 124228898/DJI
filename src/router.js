import Vue from "vue";
import Router from "vue-router";
import SeriesTabContent from "./components/SeriesTabContent";
import Home from "./views/Home";
import Series from "./views/Series";
import ShoppingCart from "./views/ShoppingCart";
import Search from "./views/Search";
import Product from "./views/Product";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/series",
      component: Series,
      children: [
        {
          path: "spark",
          name: "spark",
          component: SeriesTabContent
        },
        {
          path: "mavic",
          name: "mavic",
          component: SeriesTabContent
        },
        {
          path: "phantom",
          name: "phantom",
          component: SeriesTabContent
        },
        {
          path: "osmo",
          name: "osmo",
          component: SeriesTabContent
        },
        {
          path: "goggles",
          name: "goggles",
          component: SeriesTabContent
        },
        {
          path: "inspire",
          name: "inspire",
          component: SeriesTabContent
        },
        {
          path: "ronin",
          name: "ronin",
          component: SeriesTabContent
        },
        {
          path: "industrial",
          name: "industrial",
          component: SeriesTabContent
        },
        {
          path: "developer",
          name: "developer",
          component: SeriesTabContent
        },
        {
          path: "tello",
          name: "tello",
          component: SeriesTabContent
        },
        {
          path: "service",
          name: "service",
          component: SeriesTabContent
        },
        {
          path: "around",
          name: "around",
          component: SeriesTabContent
        }
      ]
    },
    {
      path: "/shoppingCart",
      name: "shoppingCart",
      component: ShoppingCart
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/product",
      redirect: "/"
    },
    {
      path: "/product/*",
      name: "product",
      component: Product
    }
  ]
});
