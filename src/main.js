import Vue from "vue";
import App from "./App.vue";
import registeredComponents from "./components/registered";
import apiConnection from "./api-connections";
import data from "./data";

Object.keys(registeredComponents).forEach((key) => {
	Vue.component(key, registeredComponents[key]);
});

Vue.use(apiConnection);
data.interfaces.forEach((i) => {
	Vue.use(i);
});

Vue.config.productionTip = false;

new Vue({
	store: data.store,
	render: (h) => h(App),
}).$mount("#app");
