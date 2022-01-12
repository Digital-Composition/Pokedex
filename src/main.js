import Vue from "vue";
import App from "./App.vue";
import registeredComponents from "./components/registered";

Object.keys(registeredComponents).forEach((key) => {
	Vue.component(key, registeredComponents[key]);
});

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
