<template>
	<div id="cards-list">
		<div class="row">
			<div
				class="col-sm-6 col-lg-3"
				v-for="(pokemon, i) in IPokemonList"
				:key="i"
				@click="OnPokemonSelection(pokemon)"
			>
				<card
					:img="pokemon.sprites.other['official-artwork'].front_default"
					:name="pokemon.name"
					:id="`${pokemon.id}`"
					:types="pokemon.types"
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
		<selectedCard v-if="ISelectedPokemon" />
	</div>
</template>

<script>
	import card from "./card.vue";
	import selectedCard from "./selectedCard.vue";
	export default {
		components: {
			card,
			selectedCard,
		},
		methods: {
			async OnNext() {
				if (1118 - this.IPokemonListOffSet >= 0) {
					this.IPokemonListOffSet = this.IPokemonListOffSet + 12;
					this.RefreshPokemonList();
				}
			},
			OnBack() {
				if (this.IPokemonListOffSet >= 12) {
					this.IPokemonListOffSet = this.IPokemonListOffSet - 12;
					this.RefreshPokemonList();
				}
			},
			OnPokemonSelection(pokemon) {
				if (this.ILoading == false) {
					this.ILoading = true;
					this.API_GetPokemonSpecie(pokemon.id).then((pokemonSpecie) => {
						if (pokemonSpecie) {
							this.API_GetPokemonEvolutionChain(pokemonSpecie.evolution_chain.url).then(
								async (evolutionChain) => {
									if (evolutionChain) {
										let evolutions = await this.GetEvolutionsInfoRecursively(evolutionChain.chain);
										let weakness = [];
										for (let i = 0; i < pokemon.types.length; i++) {
											const typeName = pokemon.types[i].type.name;
											let type = await this.API_GetPokemonTypes(typeName);
											weakness = [...weakness, ...type.damage_relations.double_damage_from];
										}
										weakness = weakness.reduce((unique, o) => {
											if (!unique.some((obj) => obj.name === o.name)) {
												unique.push(o);
											}
											return unique;
										}, []);
										this.ISelectedPokemon = { ...pokemon, ...pokemonSpecie, evolutions, weakness };
										this.ILoading = false;
									}
								}
							);
						}
					});
				}
			},
			async RefreshPokemonList() {
				if (this.ILoading == false) {
					this.ILoading = true;
					let response = await this.API_GetPokemonList(this.IPokemonListOffSet);
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
				}
			},
			async GetEvolutionsInfoRecursively(chain, info = []) {
				if (info.length == 0) {
					let pokemonInfo = await this.API_GetPokemonInfo(chain.species.name);
					info.push(pokemonInfo);
				}
				if (chain.evolves_to.length > 0) {
					let pokemonInfo = await this.API_GetPokemonInfo(chain.evolves_to[0].species.name);
					if (pokemonInfo) {
						info.push(pokemonInfo);
						this.GetEvolutionsInfoRecursively(chain.evolves_to[0], info);
					}
				}
				return info;
			},
		},
	};
</script>

<style scoped>
	#cards-list {
		overflow-y: auto;
		max-height: calc(100vh - 150px);
		padding: 0px 10px;
	}
	@media (min-width: 0px) {
		#cards-list {
			padding-top: 280px;
			max-height: calc(100vh - 250px);
		}
	}

	@media (min-width: 570px) {
		#cards-list {
			padding-top: 180px;
			max-height: calc(100vh - 150px);
		}
	}


</style>
