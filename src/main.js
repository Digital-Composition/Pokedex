import Vue from "vue";
import App from "./App.vue";
import registeredComponents from "./components/registered";
import store from './store'

Object.keys(registeredComponents).forEach((key) => {
	Vue.component(key, registeredComponents[key]);
});

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App)
}).$mount("#app");

window.state = {
	...store.state,
};