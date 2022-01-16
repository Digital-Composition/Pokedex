<template>
	<div id="app" class="container">
		<div class="col">
			<cardsList v-show="IPokemonList.length > 0" />
			<topBar />
		</div>
		<loader />
	</div>
</template>

<script>
	import topBar from "./components/layout/topBar.vue";
	import cardsList from "./components/main/cardsList";
	import loader from "./components/layout/loader.vue";
	export default {
		name: "App",
		components: { topBar, cardsList, loader },
		async created() {
			this.ILoading = true;
			this.API_GetPokemonList().then(async (response) => {
				if (response) {
					let pokemonList = [];
					for (let i = 0; i < response.length; i++) {
						let pokemon = response[i];
						let pokemonInfo = await this.API_GetPokemonInfo(pokemon.name);
						if (pokemonInfo) pokemonList.push({ ...pokemon, ...pokemonInfo });
					}
					this.IPokemonList = pokemonList;
					this.ILoading = false;
				}
			});
		},

		// Only for development
		/*************************************/
		computed: {
			state() {
				return this.$store.state;
			},
		},
		watch: {
			state: {
				immediate: true,
				deep: true,
				handler(state) {
					window.state = { ...state };
				},
			},
		},
		/*************************************/
	};
</script>

<style>
	@import "./css/font-style.css";
	@import "./css/size-position-style.css";
	@import "./css/custom-style.css";
	@import "./css/margin-style.css";
	@import "./css/padding-style.css";
	@import "./css/font-awesome/css/font-awesome.css";

	html {
		background-image: url("~@/assets/app-bg.svg");
		background-attachment: fixed;
		background-position: center;
	}
</style>
