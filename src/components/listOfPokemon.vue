<template>
	<div id="list-of-pokemon" class="row pb-50" v-if="ListOfPokemon.length > 0">
		<div class="col-25" v-for="(pokemon, i) in ListOfPokemon" :key="i">
			<div class="row justify-center">
				<card
					class="ma-10"
					:mxWidth="200"
					:mnHeight="260"
					:textSize="14"
					:bgColor="'var(--base)'"
					:shadow="true"
					:img="pokemon.sprites.other['official-artwork'].front_default"
					:title="pokemon.name"
					:titleColor="'var(--dark)'"
					:titleSize="15"
					:text="`${pokemon.id}`"
					:textColor="'var(--dark)'"
					:types="pokemon.types"
					:typesSize="50"
					:border="true"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
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
	#list-of-pokemon {
		overflow-y: auto;
		z-index: -1;
		height: calc(100vh - 200px);
	}
	#card:hover {
		transition: all 0.3s ease-in-out;
		transform: scale(1.03);
	}
</style>
