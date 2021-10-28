import Vue from "vue";
import App from "./App.vue";
import Cloudbase from "@cloudbase/vue-provider";
import router from "./router"



// 注意更新此处的TCB_ENV_ID为你自己的环境ID
window._tcbEnv = window._tcbEnv || {TCB_ENV_ID:"test-2gobgjar8fd761bb"};

export const envId = window._tcbEnv.TCB_ENV_ID;
export const region = window._tcbEnv.TCB_REGION;

Vue.config.productionTip = false;

Vue.use(Cloudbase, {
  env: envId,
  region: region
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
