import Vue from "vue";
import App from "./App.vue";
// Styles
import "./shared/styles/main.scss";

// Components
import BaseCmp from "./shared/components/base-cmp"

Vue.component("BaseCmp", BaseCmp)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
