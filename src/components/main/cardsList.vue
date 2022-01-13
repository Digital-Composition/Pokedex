<template>
	<div id="cards-list">
		<div class="row">
			<div class="col-sm-3" v-for="(pokemon, i) in ListOfPokemon" :key="i">
				<card
					:img="pokemon.sprites.other['official-artwork'].front_default"
					:name="pokemon.name"
					:id="`${pokemon.id}`"
					:types="pokemon.types"
				/>
			</div>
		</div>
		<div class="row mt-20 mb-50 justify-content-center">
			<btn :text="'Load more'" :bgColor="'var(--base-glass)'" :text-color="'var(--light)'"/>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import card from "./card.vue";
	export default {
		components: {
			card,
		},
		created() {
			this.GetListOfPokemon();
		},
		computed: mapState({
			ListOfPokemon: (state) => state.ListOfPokemon,
			OffSet: (state) => state.OffSet,
		}),
		methods: {
			GetListOfPokemon() {
				this.$store.dispatch("api_GetListOfPokemon", 12, this.OffSet);
			},
		},
	};
</script>

<style scoped>
	#cards-list {
		overflow-y: auto;
		max-height: calc(100vh - 200px);
	}
</style>
