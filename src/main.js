import Vue from "vue";
import App from "./App.vue";
// Styles
import "./shared/main.scss";

// Components
import Base from "./components/Base";

Vue.component("Base", Base);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
