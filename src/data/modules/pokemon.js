const pokemon = {
	namespaced: true,
	state: {
		List: [],
		ListOffSet: 0,
		SortBy: 0,
		SelectedPokemon: undefined,
		PokemonTypes: [],
	},
	mutations: {
		set_List(state, value) {
			state.List = value;
		},
		set_ListOffSet(state, value) {
			state.ListOffSet = value;
		},
		set_SortBy(state, value) {
			state.SortBy = value;
		},
		set_SelectedPokemon(state, value) {
			state.SelectedPokemon = value;
		},
		set_PokemonTypes(state, value) {
			state.PokemonTypes = value;
		},
	},
	actions: {
		handle_List({ commit }, value) {
			commit("set_List", value);
		},
		handle_ListOffSet({ commit }, value) {
			commit("set_ListOffSet", value);
		},
		handle_SortBy({ commit }, value) {
			commit("set_SortBy", value);
		},
		handle_SelectedPokemon({ commit }, value) {
			commit("set_SelectedPokemon", value);
		},
		handle_PokemonTypes({ commit }, value) {
			commit("set_PokemonTypes", value);
		},
	},
};

export default pokemon;
