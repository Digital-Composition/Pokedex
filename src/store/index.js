import Vue from "vue";
import Vuex from "vuex";
import api from "./api";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		OffSet: 0,
		ListOfPokemon: [],
		ListOfTypes: [],
	},
	mutations: {
		set_ListOfPokemon(state, value) {
			state.ListOfPokemon = value;
		},
	},
	actions: { ...api.actions },
	modules: {},
});
