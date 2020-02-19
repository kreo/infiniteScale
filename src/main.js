import Vue from "vue";
import App from "./App.vue";
// Styles
import "./shared/main.scss";

// Components
import Skel from "./components/Skel";

Vue.component("Skel", Skel);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
