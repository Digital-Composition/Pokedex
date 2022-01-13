<template>
	<div id="toolbar" class="row">
		<div class="col">
			<div class="row">
				<span class="tx-20">Name or Number</span>
			</div>
			<div class="row">
				<input-field :width="150" />
				<btn class="ml-10" :icon="'fa-search'" :bgColor="'var(--alert)'" :width="30" />
			</div>
			<div class="row mx-wd-300">
				<span class="tx-12">
					Use the Advanced Search to explore Pokemon by type, weakness, ability and more!
				</span>
			</div>
		</div>
		<div id="right-column" class="col-25">
			<div class="row justify-end">
				<card
					:mxWidth="250"
					:mnHeight="50"
					:textSize="14"
					:bgColor="'var(--accent)'"
					:border="true"
					:text="'Search for a Pokemon by name or using its National Pokedex number'"
				/>
			</div>
			<div class="row justify-end mt-10">
				<btn class="ml-10" :icon="'fa-arrow-left'" :bgColor="'var(--secondary)'" :width="30" />
				<btn class="ml-10" :icon="'fa-arrow-right'" :bgColor="'var(--secondary)'" :width="30" />
			</div>
		</div>
	</div>
</template>

<script>
	import card from "../registered/card.vue";
	export default {
		components: { card },
	};
</script>

<style scoped>
	#toolbar {
		background: var(--base-glass);
		border-radius: 0px 0px 10px 10px;
		box-shadow: 0px 8px 8px -5px var(--shadow);
		padding: 10px 25px;
		backdrop-filter: blur(2px);
		border: 2px solid var(--dark);
		z-index: 2;
	}
	span {
		color: var(--light);
		padding: 5px;
	}
</style>
