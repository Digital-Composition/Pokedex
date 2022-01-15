import Vue from "vue";
import Vuex from "vuex";
import api from "./api";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		SearchCriteria: "",
		OffSet: 0,
		SelectedPokemonInfo: undefined,
		SelectedPokemonSpecie: undefined,
		ListOfPokemon: [],
		ListOfTypes: [],
	},
	mutations: {
		set_ListOfPokemon(state, value) {
			state.ListOfPokemon = value;
		},
		set_ListOfTypes(state, value) {
			state.ListOfTypes = value;
		},
		set_SelectedPokemonInfo(state, value) {
			state.SelectedPokemonInfo = value;
		},
		set_SelectedPokemonSpecie(state, value) {
			state.SelectedPokemonSpecie = value;
		},
		set_OffSet(state, value) {
			state.OffSet = value;
		},
		set_SearchCriteria(state, value) {
			state.SearchCriteria = value;
		},
	},
	actions: {
		...api.actions,
		handle_OffSet({ commit }, value) {
			commit("set_OffSet", value);
		},
		handle_SearchCriteria({ commit }, value) {
			commit("set_SearchCriteria", value);
		},
		handle_SelectedPokemonInfo({ commit }, value) {
			commit("set_SelectedPokemonInfo", value);
		},
		handle_SelectedPokemonSpecie({ commit }, value) {
			commit("set_SelectedPokemonSpecie", value);
		},
	},
	modules: {},
});
