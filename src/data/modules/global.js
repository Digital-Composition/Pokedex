const Global = {
	namespaced: true,
	state: {
		SearchCriteria: "",
		Loading: false,
	},
	mutations: {
		set_SearchCriteria(state, value) {
			state.SearchCriteria = value;
		},
		set_Loading(state, value) {
			state.Loading = value;
		},
	},
	actions: {
		handle_SearchCriteria({ commit }, value) {
			commit("set_SearchCriteria", value);
		},
		handle_Loading({ commit }, value) {
			commit("set_Loading", value);
		},
	},
};

export default Global;
