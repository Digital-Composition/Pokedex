<template>
	<div id="topBar" class="row">
		<div class="col-sm-8">
			<div class="row">
				<span class="tx-20">Name or Number</span>
			</div>
			<div class="row mb-10">
				<input-field />
				<btn
					class="ml-10"
					:action="OnClearSearch"
					:start_icon="'fa-refresh'"
					:bgColor="'var(--alert)'"
					:width="30"
					:iconSize="20"
					:iconColor="'var(--light)'"
					:borderRadius="'83px 114px 38px 23px / 23px 38px 114px 83px'"
				/>
				<btn
					class="ml-10"
					:action="OnSearch"
					:start_icon="'fa-search'"
					:bgColor="'var(--secondary)'"
					:width="30"
					:iconSize="20"
					:iconColor="'var(--light)'"
					:borderRadius="'110px 32px 84px 22px / 22px 84px 32px 110px'"
				/>
			</div>
			<div class="row mb-10">
				<span id="card" class="tx-13">
					Use the Advanced Search to explore Pokemon by type, weakness, ability and more!
				</span>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="row justify-content-center">
				<span id="card" class="tx-13">Filter the list by number or name</span>
			</div>
			<div class="row mt-10 justify-content-center">
				<dropdown />
			</div>
		</div>
	</div>
</template>

<script>
	import inputField from "./topBar-components/input-field.vue";
	import dropdown from "./topBar-components/dropdown.vue";
	export default {
		components: {
			"input-field": inputField,
			dropdown,
		},
		methods: {
			async OnSearch() {
				if (this.ISearchCriteria != "") {
					let response = await this.API_GetPokemonInfo(this.ISearchCriteria);
					if (response) {
						this.IPokemonList = [response];
						this.IPokemonListOffSet = response.id - 1;
						this.ISearchCriteria = "";
					}
				}
			},
			OnClearSearch() {
				this.ISearchCriteria = "";
			},
		},
	};
</script>

<style scoped>
	#topBar {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		background: var(--dark-glass);
		border-radius: 0px 0px 4% 4%;
		box-shadow: 0px 8px 8px -5px var(--shadow);
		padding: 10px 25px;
		backdrop-filter: blur(1px);
		border: 2px solid var(--dark);
		z-index: 1;
	}
	#card {
		vertical-align: middle;
		background-color: var(--dark-glass);
		color: var(--light);
		border-radius: 107px 85px 33px 21px / 21px 33px 85px 107px;
		border: 2px solid var(--deep-dark);
		padding: 10px;
	}
	span {
		color: var(--light);
		padding: 5px;
	}
</style>
