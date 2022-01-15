<template>
	<div id="background" class="pos-fixed l-0 r-0 t-0 b-0">
		<div id="selected-card">
			<div class="container">
				<div class="col">
					<div class="row justify-content-end">
						<btn
							:start_icon="'fa-close'"
							:border="false"
							:iconSize="30"
							:width="60"
							:iconColor="'var(--deep-dark)'"
							:action="closeSelectedCard"
						/>
					</div>
					<div class="row justify-content-center">
						<span id="title" class="tx-30 tx-bold">{{ SelectedPokemonInfo.name.toUpperCase() }}</span>
					</div>
					<div class="row justify-content-center">
						<div class="col-sm-6">
							<div class="row justify-content-center">
								<img
									:src="SelectedPokemonInfo.sprites.other['official-artwork'].front_default"
									width="65%"
									height="65%"
								/>
							</div>
						</div>
						<div class="col-sm-6">
							<div id="flavor-text-row" class="row mt-20">
								<div
									id="flavor-text"
									class="tx-13 tx-bold mx-wd-250"
									:style="{
										'background-color': PokemonColorType.color,
										color: PokemonColorType.fColor,
									}"
								>
									{{
										SelectedPokemonSpecie.flavor_text_entries[1].flavor_text.replace(
											/[\r\n\f]+/gm,
											" "
										)
									}}
								</div>
							</div>
							<div id="stats-card-row">
								<div
									id="stats-card"
									class="mt-20"
									:style="{
										'background-color': PokemonColorType.color,
										color: PokemonColorType.fColor,
									}"
								>
									<div class="row">
										<div class="col-6">
											<div class="row mb-10">
												<span class="tx-bold tx-13"
													>Height: {{ (SelectedPokemonInfo.height / 2.54).toFixed(2) }}"</span
												>
											</div>
											<div class="row mb-10">
												<span class="tx-bold tx-13"
													>Weight: {{ (SelectedPokemonInfo.weight / 2.2).toFixed(1) }} lbs</span
												>
											</div>
											<div class="row mb-10">
												<span class="tx-bold tx-13"
													>Gender:
													<i class="fa fa-mars tx-20 tx-bold ml-10"></i>
													<i class="fa fa-venus tx-20 tx-bold ml-10"></i>
												</span>
											</div>
										</div>
										<div class="col-6"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import typesAndColors from "./typesAndColors.json";
	export default {
		computed: mapState({
			SelectedPokemonInfo: (state) => state.SelectedPokemonInfo,
			SelectedPokemonSpecie: (state) => state.SelectedPokemonSpecie,
			PokemonColorType() {
				return this.getColorForType(this.SelectedPokemonInfo.types[0].type.name);
			},
		}),
		data() {
			return {
				typesAndColors,
			};
		},
		methods: {
			getColorForType(type) {
				for (let i = 0; i < this.typesAndColors.length; i++) {
					const item = this.typesAndColors[i];
					if (item.name == type) return item;
				}
			},
			closeSelectedCard() {
				this.$store.dispatch("handle_SelectedPokemonInfo", undefined);
			},
		},
	};
</script>

<style scoped>
	#background {
		position: absolute;
		background-color: var(--base-glass);
	}
	#selected-card {
		border: 2px solid var(--dark);
		border-radius: 107px 85px 33px 21px / 21px 33px 85px 107px;
		position: absolute;
		background-color: var(--base-glass);
		backdrop-filter: blur(20px);
		box-shadow: 0px 10px 40px 0px var(--shadow);
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
			padding: 0px;
		}
		#stats-card-row {
			justify-content: center;
			padding: 0px;
		}
	}

	@media (min-width: 800px) {
		#selected-card {
			left: 15%;
			right: 15%;
			top: 10%;
			bottom: 10%;
		}
		#flavor-text-row {
			padding-right: 50px;
		}
		#stats-card-row {
			padding-right: 50px;
		}
	}

	@media (min-width: 1200px) {
		#selected-card {
			left: 25%;
			right: 25%;
			top: 10%;
			bottom: 10%;
		}
	}
</style>
