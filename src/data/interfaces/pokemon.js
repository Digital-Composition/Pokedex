const Pokemon = {
	install(Vue) {
		Vue.mixin({
			computed: {
				IPokemonList: {
					get() {
						return this.$store.state.List;
					},
					set(value) {
						this.$store.dispatch("handle_List", value);
					},
				},
				IPokemonListOffSet: {
					get() {
						return this.$store.state.ListOffSet;
					},
					set(value) {
						this.$store.dispatch("handle_ListOffSet", value);
					},
				},
				ISortBy: {
					get() {
						return this.$store.state.SortBy;
					},
					set(value) {
						this.$store.dispatch("handle_SortBy", value);
					},
				},
				ISelectedPokemon: {
					get() {
						return this.$store.state.SelectedPokemon;
					},
					set(value) {
						this.$store.dispatch("handle_SelectedPokemon", value);
					},
				},
				IPokemonTypes: {
					get() {
						return this.$store.state.PokemonTypes;
					},
					set(value) {
						this.$store.dispatch("handle_PokemonTypes", value);
					},
				},
			},
		});
	},
};
export default Pokemon;
