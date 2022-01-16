<template>
	<div id="background" class="pos-fixed l-0 r-0 t-0 b-0">
		<div id="selected-card">
			<div class="container">
				<div class="col">
					<div class="row justify-content-center">
						<span id="title" class="tx-30 tx-bold">{{ ISelectedPokemon.name.toUpperCase() }}</span>
					</div>
					<div class="row mb-10">
						<div class="col-md-6">
							<div class="row justify-content-center">
								<img
									:src="ISelectedPokemon.sprites.other['official-artwork'].front_default"
									width="65%"
									height="65%"
								/>
							</div>
						</div>
						<div class="col-md-6">
							<div id="flavor-text-row" class="row my-10">
								<div
									id="flavor-text"
									class="tx-13 tx-bold mx-wd-250"
									:style="{
										'background-color': PokemonColorType.color,
										color: PokemonColorType.fColor,
									}"
								>
									{{
										ISelectedPokemon.flavor_text_entries[1].flavor_text.replace(/[\r\n\f]+/gm, " ")
									}}
								</div>
							</div>
							<div id="stats-card-row">
								<div
									id="stats-card"
									:style="{
										'background-color': PokemonColorType.color,
										color: PokemonColorType.fColor,
									}"
								>
									<div class="row">
										<div class="col-8">
											<div class="row mb-10">
												<span class="tx-bold tx-13">
													Height: {{ (ISelectedPokemon.height / 2.54).toFixed(2) }}"
												</span>
											</div>
											<div class="row mb-10">
												<span class="tx-bold tx-13">
													Weight: {{ (ISelectedPokemon.weight / 2.2).toFixed(1) }} lbs
												</span>
											</div>
											<div class="row mb-10">
												<span class="tx-bold tx-13">
													Gender:
													<i class="fa fa-mars tx-20 tx-bold ml-10"></i>
													<i class="fa fa-venus tx-20 tx-bold ml-10"></i>
												</span>
											</div>
										</div>
										<div class="col-4">
											<div class="row row tx-13 mb-10 tx-bold">TYPES</div>
											<div
												class="row tx-13 mb-10 tx-bold"
												v-for="(type, i) in this.ISelectedPokemon.types"
												:key="i"
											>
												- {{ type.type.name }}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row px-20 mb-10">
						<div class="col-md mr-10 mb-10">
							<statsCard :PokemonColorType="PokemonColorType" />
						</div>
						<div class="col-md">
							<weaknessCard :PokemonColorType="PokemonColorType" />
						</div>
					</div>
					<div class="row px-20">
						<div class="col">
							<evolutionCard :PokemonColorType="PokemonColorType" />
						</div>
					</div>
				</div>
				<btn
					class="pos-absolute r-10 t-10"
					:start_icon="'fa-close'"
					:border="false"
					:iconSize="30"
					:width="60"
					:iconColor="'var(--deep-dark)'"
					:action="closeSelectedCard"
				/>
			</div>
		</div>
	</div>
</template>

<script>
		import statsCard from "./selectedCard-components/statsCard.vue";
		import weaknessCard from "./selectedCard-components/weaknessCard.vue";
		import evolutionCard from "./selectedCard-components/evolutionCard.vue";
		export default {
			components: {
				statsCard,
				weaknessCard,
				evolutionCard,
			},
			
			computed: {
				PokemonColorType() {
					return this.getColorForType(this.ISelectedPokemon.types[0].type.name);
				},
			},
			methods: {
				getColorForType(type) {
					for (let i = 0; i < this.IPokemonTypesAndColors.length; i++) {
						const item = this.IPokemonTypesAndColors[i];
						if (item.name == type) return item;
					}
				},
				closeSelectedCard() {
					this.ISelectedPokemon = undefined;
				},
			},
		};
</script>

<style scoped>
	#background {
		z-index: 200;
		background-color: var(--light-glass);
		position: absolute;
	}
	#selected-card {
		border: 2px solid var(--dark);
		border-radius: 107px 85px 33px 21px / 21px 33px 85px 107px;
		position: absolute;
		max-width: 800px;
		background-color: var(--base-glass);
		backdrop-filter: blur(20px);
		box-shadow: 0px 5px 40px 10px var(--shadow);
		overflow-y: auto;
		padding: 20px;
	}
	#flavor-text {
		box-shadow: 0px 4px 4px -1px var(--shadow);
		color: var(--light);
		border-radius: 110px 32px 84px 22px / 22px 84px 32px 110px;
		border: 2px solid var(--dark);
		padding: 20px;
	}

	#stats-card {
		box-shadow: 0px 4px 4px -1px var(--shadow);
		color: var(--light);
		border-radius: 107px 85px 33px 21px / 21px 33px 85px 107px;
		border: 2px solid var(--dark);
		padding: 20px;
	}

	#title {
		color: var(--deep-dark);
	}

	@media (min-width: 0px) {
		#selected-card {
			left: 5%;
			right: 5%;
			top: 5%;
			bottom: 5%;
		}
		#flavor-text-row {
			justify-content: center;
			padding: 0px 20px;
		}
		#stats-card-row {
			justify-content: center;
			padding: 0px 20px;
		}
	}

	@media (min-width: 768px) {
		#selected-card {
			left: 15%;
			right: 15%;
			top: 10%;
			bottom: 10%;
		}
	}

	@media (min-width: 992px) {
		#selected-card {
			left: 30% !important;
			right: 30% !important;
			top: 10%;
			bottom: 10%;
		}
		#flavor-text-row {
			padding-right: 20px;
		}
		#stats-card-row {
			padding-right: 20px;
		}
	}
</style>
