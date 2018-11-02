import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const components = {
  home: () => import("../views/home"),
  blogList: () => import("../views/blogList"),
  article: () => import("../views/blogList/article")
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      title: "首页",
      component: components.home
    },
    {
      path: "/blogList",
      title: "博客列表",
      component: components.blogList
    },
    {
      path: "/article/:id",
      title: "博客页",
      component: components.article
    }
  ]
});
