<template>
	<div
		id="evolution-card"
		:style="{
			'background-color': PokemonColorType.color,
			color: PokemonColorType.fColor,
		}"
	>
		<div class="row pl-10 justify-content-center">
			<span class="tx-bold">Evolutions</span>
		</div>
		<div class="row pl-10 mb-10 justify-content-center">
			<img
				id="evo-img"
				v-for="(pokemon, i) in ISelectedPokemon.evolutions"
				:key="i"
				:src="pokemon.sprites.other['official-artwork'].front_default"
				width="25%"
				height="25%"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["PokemonColorType"],
	};
</script>

<style scoped>
	#evolution-card {
		box-shadow: 0px 4px 4px -1px var(--shadow);
		color: var(--light);
		border-radius: 83px 114px 38px 23px / 23px 38px 114px 83px;
		border: 2px solid var(--dark);
		padding: 20px;
		max-height: 180px;
	}
</style>
