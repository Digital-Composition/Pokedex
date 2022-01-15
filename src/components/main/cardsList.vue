<template>
	<div id="cards-list">
		<div class="row">
			<div
				class="col-sm-6 col-lg-3"
				v-for="(pokemon, i) in ListOfPokemon"
				:key="i"
				@click="OnCardSelection(pokemon)"
			>
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
				:borderRadius="'110px 32px 84px 22px / 22px 84px 32px 110px'"
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
				:borderRadius="'83px 114px 38px 23px / 23px 38px 114px 83px'"
			/>
		</div>
		<selectedCard v-if="SelectedPokemonInfo" />
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
			SelectedPokemonInfo: (state) => state.SelectedPokemonInfo,
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
			OnCardSelection(card) {
				this.$store.dispatch("api_GetPokemonSpecieByNameOrID", card.id).then(() => {
					this.$store.dispatch("handle_SelectedPokemonInfo", card);
				});
			},
		},
	};
</script>

<style scoped>
	#cards-list {
		overflow-y: auto;
		max-height: calc(100vh - 170px);
		padding: 0px 10px;
	}
</style>
