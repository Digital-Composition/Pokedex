<template>
	<div id="toolbar" class="row">
		<div class="col-sm-8">
			<div class="row">
				<span class="tx-20">Name or Number</span>
			</div>
			<div class="row">
				<input-field :width="200" />
				<btn class="ml-10" :icon="'fa-search'" :bgColor="'var(--alert)'" :width="30" />
			</div>
			<div class="row mx-wd-300">
				<span class="tx-13">
					Use the Advanced Search to explore Pokemon by type, weakness, ability and more!
				</span>
			</div>
		</div>
		<div class="col-sm-4">
			<div id="card" class="tx-13">Search for a Pokemon by name or using its National Pokedex number</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#toolbar {
		background: var(--base-glass);
		border-radius: 0px 0px 5px 5px;
		box-shadow: 0px 8px 8px -5px var(--shadow);
		padding: 10px 25px;
		backdrop-filter: blur(2px);
		border: 2px solid var(--dark);
		z-index: 1;
	}
	#card {
		display: inline-block;
		vertical-align: middle;
		background-color: var(--accent);
		color: var(--light);
		border-radius: 5px;
		border: 2px solid var(--dark);
		padding: 10px;
	}
	span {
		color: var(--light);
		padding: 5px;
	}
</style>
