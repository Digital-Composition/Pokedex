const axios = require("axios");

const api = {
	actions: {
		api_GetListOfPokemon({ commit }, limit = 12, offset = 0) {
			var config = {
				method: "get",
				url: "https://pokeapi.co/api/v2/pokemon",
				params: {
					limit,
					offset,
				},
				headers: {
					"Content-Type": "application/json",
				},
			};
			axios(config)
				.catch((error) => {
					if (error.response) {
						console.log(error);
					}
				})
				.then(async (response) => {
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
						console.log(listOfPokemon);
						commit("set_ListOfPokemon", listOfPokemon);
					}
				});
		},
	},
};

export default api;
