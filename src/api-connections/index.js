import axios from "axios";
const apiConnection = {
	install(Vue) {
		Vue.mixin({
			methods: {
				async API_GetPokemonTypes(type) {
					var config = {
						method: "get",
						url: `https://pokeapi.co/api/v2/type/${type}`,
						headers: {
							"Content-Type": "application/json",
						},
					};
					try {
						let response = await axios(config);
						if (response && response.data) {
							return response.data;
						}
						return undefined;
					} catch (err) {
						console.log(err);
						return undefined;
					}
				},
				async API_GetPokemonList(offset = 0, limit = 12) {
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
					try {
						let response = await axios(config);
						if (response && response.data) {
							return response.data.results;
						}
						return undefined;
					} catch (err) {
						console.log(err);
						return undefined;
					}
				},
				async API_GetPokemonInfo(id) {
					var config = {
						method: "get",
						url: `https://pokeapi.co/api/v2/pokemon/${id}`,
						headers: {
							"Content-Type": "application/json",
						},
					};
					try {
						let response = await axios(config);
						if (response && response.data) {
							return response.data;
						}
						return undefined;
					} catch (err) {
						console.log(err);
						return undefined;
					}
				},
				async API_GetPokemonSpecie(id) {
					var config = {
						method: "get",
						url: `https://pokeapi.co/api/v2/pokemon-species/${id}`,
						headers: {
							"Content-Type": "application/json",
						},
					};
					try {
						let response = await axios(config);
						if (response && response.data) {
							return response.data;
						}
						return undefined;
					} catch (err) {
						console.log(err);
						return undefined;
					}
				},
				async API_GetPokemonEvolutionChain(url) {
					var config = {
						method: "get",
						url,
						headers: {
							"Content-Type": "application/json",
						},
					};
					try {
						let response = await axios(config);
						if (response && response.data) {
							return response.data;
						}
						return undefined;
					} catch (err) {
						console.log(err);
						return undefined;
					}
				},
			},
		});
	},
};
export default apiConnection;
