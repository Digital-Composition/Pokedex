<template>
	<div
		id="weakness-card"
		:style="{
			'background-color': PokemonColorType.color,
			color: PokemonColorType.fColor,
		}"
	>
		<div class="row pl-10 mb-10 justify-content-center">
			<span class="tx-bold">Weakness</span>
		</div>
		<div class="row pl-10">
			<span
				id="type"
				class="tx-10 tx-bold"
				v-for="(type, i) in ISelectedPokemon.weakness"
				:key="i"
				:style="{
					background: IGetColorForType(type.name).color,
					color: IGetColorForType(type.name).fColor,
				}"
			>
				{{ type.name.toUpperCase() }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["PokemonColorType"],
	};
</script>

<style scoped>
	#weakness-card {
		box-shadow: 0px 4px 4px -1px var(--shadow);
		color: var(--light);
		border-radius: 83px 114px 38px 23px / 23px 38px 114px 83px;
		border: 2px solid var(--dark);
		padding: 20px;
      min-height: 100px;
	}
	#type {
		color: var(--dark);
		padding: 1px 5px;
		border-radius: 10px;
		border: 2px solid var(--deep-dark);
		margin: 5px;
	}
</style>
