const axios = require("axios");

const api = {
	actions: {
		async api_GetListOfTypes({ commit }) {
			var config = {
				method: "get",
				url: "https://pokeapi.co/api/v2/type",
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				let response = await axios(config);
				if (response && response.data) {
					let ListOfTypes = response.data.results;
					commit("set_ListOfTypes", ListOfTypes);
				}
			} catch (err) {
				console.log(err);
			}
		},
		async api_GetPokemonByNameOrID({ commit }, params) {
			var config = {
				method: "get",
				url: "https://pokeapi.co/api/v2/pokemon/" + params,
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				let response = await axios(config);
				if (response && response.data) {
					let listOfPokemon = [response.data];
					commit("set_ListOfPokemon", listOfPokemon);
				}
			} catch (err) {
				console.log(err);
			}
		},
		async api_GetPokemonSpecieByNameOrID({ commit }, params) {
			var config = {
				method: "get",
				url: "https://pokeapi.co/api/v2/pokemon-species/" + params,
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				let response = await axios(config);
				if (response && response.data) {
					commit("set_SelectedPokemonSpecie", response.data);
				}
			} catch (err) {
				console.log(err);
			}
		},
		async api_GetListOfPokemon({ commit }, params) {
			var config = {
				method: "get",
				url: "https://pokeapi.co/api/v2/pokemon",
				params: {
					limit: params.limit,
					offset: params.offset,
				},
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				let response = await axios(config);
				if (response && response.data) {
					let listOfPokemon = [];
					for (let i = 0; i < response.data.results.length; i++) {
						const pokemon = response.data.results[i];
						config = {
							method: "get",
							url: pokemon.url,
							headers: {
								"Content-Type": "application/json",
							},
						};
						try {
							let response = await axios(config);
							listOfPokemon.push(response.data);
						} catch (err) {
							console.log(err);
						}
					}
					commit("set_ListOfPokemon", listOfPokemon);
				}
			} catch (err) {
				console.log(err);
			}
		},
	},
};

export default api;
