import Vue from "vue";
import Vuex from "vuex";
import IGlobal from "./interfaces/global";
import IPokemon from "./interfaces/pokemon";
import Global from "./modules/global";
import Pokemon from "./modules/pokemon";
Vue.use(Vuex);

export default {
	interfaces: [IGlobal, IPokemon],
	store: new Vuex.Store({
		state: {
			...Global.state,
			...Pokemon.state,
		},
		mutations: {
			...Global.mutations,
			...Pokemon.mutations,
		},
		actions: {
			...Global.actions,
			...Pokemon.actions,
		},
	}),
};
