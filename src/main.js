import Vue from "vue";
import App from "./App.vue";
// Styles
import "./styles/main.scss";

// Components
import BaseCmp from "./components/base-cmp"

Vue.component("BaseCmp", BaseCmp)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
