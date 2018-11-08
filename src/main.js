// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import store from "./store";
import ElementUI from "element-ui";
import "./style";
import util from "./utils/index";
import { parseTime, formatDateEng } from "../filters";
Vue.prototype.parseTime = parseTime;
Vue.prototype.formatDateEng = formatDateEng;
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$axios = util.axios;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
