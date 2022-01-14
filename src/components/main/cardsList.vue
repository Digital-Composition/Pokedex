<template>
	<div id="cards-list">
		<div class="row">
			<div class="col-sm-6 col-lg-3" v-for="(pokemon, i) in ListOfPokemon" :key="i">
				<card
					:img="pokemon.sprites.other['official-artwork'].front_default"
					:name="pokemon.name"
					:id="`${pokemon.id}`"
					:types="pokemon.types"
					:typesAndColors="typesAndColors"
				/>
			</div>
		</div>
		<div class="row mt-20 mb-50 justify-content-center">
			<btn
				:text="'Back'"
				:width="80"
				:start_icon="'fa-arrow-left'"
				:bgColor="'var(--dark-glass)'"
				:iconColor="'var(--light)'"
				:text-color="'var(--light)'"
				:action="OnBack"
			/>
			<btn
				class="ml-10"
				:text="'Next'"
				:width="80"
				:end_icon="'fa-arrow-right'"
				:bgColor="'var(--dark-glass)'"
				:iconColor="'var(--light)'"
				:text-color="'var(--light)'"
				:action="OnNext"
			/>
		</div>
		<selectedCard v-if="SelectedCard" />
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import card from "./card.vue";
	import typesAndColors from "./typesAndColors.json";
	import selectedCard from "./selectedCard.vue";
	export default {
		components: {
			card,
			selectedCard,
		},
		data() {
			return {
				typesAndColors,
			};
		},
		created() {
			this.$store.dispatch("api_GetListOfPokemon", { limit: 12, offset: 0 });
		},
		computed: mapState({
			ListOfPokemon: (state) => state.ListOfPokemon,
			OffSet: (state) => state.OffSet,
			SelectedCard: (state) => state.SelectedCard,
		}),
		methods: {
			OnNext() {
				this.$store.dispatch("handle_OffSet", this.OffSet + 12);
				this.$store.dispatch("api_GetListOfPokemon", { limit: 12, offset: this.OffSet });
			},
			OnBack() {
				this.$store.dispatch("handle_OffSet", this.OffSet >= 12 ? this.OffSet - 12 : this.OffSet);
				this.$store.dispatch("api_GetListOfPokemon", { limit: 12, offset: this.OffSet });
			},
		},
	};
</script>

<style scoped>
	#cards-list {
		overflow-y: auto;
		max-height: calc(100vh - 150px);
	}
</style>
