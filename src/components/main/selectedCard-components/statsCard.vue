<template>
	<div
		id="stats-detail-card"
		:style="{
			'background-color': PokemonColorType.color,
			color: PokemonColorType.fColor,
		}"
	>
		<div class="row pl-10 mb-10 justify-content-center">
			<span class="tx-bold">Stats</span>
		</div>
		<div class="row">
			<div class="col-2" v-for="(stat, i) in ISelectedPokemon.stats" :key="i">
				<div class="row">
					<span class="tx-bold tx-20 pr-10">{{ stat.base_stat }}</span>
				</div>
				<div class="row">
					<span class="tx-11 p-10">{{
						stat.stat.name
							.replaceAll("special-attack", "S-ATK")
							.replaceAll("special-defense", "S-DEF")
							.replaceAll("attack", "ATK")
							.replaceAll("hp", "HP")
							.replaceAll("defense", "DEF")
							.replaceAll("speed", "SPD")
					}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["PokemonColorType"],
	};
</script>

<style scoped>
	#stats-detail-card {
		box-shadow: 0px 4px 4px -1px var(--shadow);
		color: var(--light);
		border-radius: 110px 32px 84px 22px / 22px 84px 32px 110px;
		border: 2px solid var(--dark);
		padding: 20px;
		min-height: 100px;
	}
</style>
