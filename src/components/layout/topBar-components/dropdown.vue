<template>
	<div id="dropdown" class="tx-bold" @click="show = !show">
		Filer By
		<div id="dropdown-content" class="py-10" v-show="show">
			<div id="dropdown-item" class="row ma-10 pa-10" @click="OnSortBy(0)">Lower Number</div>
			<div id="dropdown-item" class="row ma-10 pa-10" @click="OnSortBy(1)">Higher Number</div>
			<div id="dropdown-item" class="row ma-10 pa-10" @click="OnSortBy(2)">A-Z</div>
			<div id="dropdown-item" class="row ma-10 pa-10" @click="OnSortBy(3)">Z-A</div>
		</div>
	</div>
</template>

<script>
	export default {
		created() {
			document.addEventListener("click", (event) => {
				if (event.target.id != "dropdown") this.show = false;
			});
		},
		data() {
			return {
				show: false,
			};
		},
		methods: {
			OnSortBy(value) {
				switch (value) {
					case 0:
						this.IPokemonList = this.SortByASC(this.IPokemonList, "id");
						break;
					case 1:
						this.IPokemonList = this.SortByDESC(this.IPokemonList, "id");
						break;
					case 2:
						this.IPokemonList = this.SortByASC(this.IPokemonList, "name");
						break;
					case 3:
						this.IPokemonList = this.SortByDESC(this.IPokemonList, "name");
						break;

					default:
						break;
				}
			},
		},
	};
</script>

<style scoped>
	#dropdown {
		display: inline-block;
		vertical-align: middle;
		background-color: var(--secondary);
		color: var(--deep-dark);
		border: 2px solid var(--deep-dark);
		width: 200px;
		border-radius: 83px 35px 108px 24px / 24px 108px 35px 83px;
		padding: 10px;
		outline: none;
		text-align: center;
	}
	#dropdown-content {
		position: absolute;
		vertical-align: middle;
		z-index: 100;
		margin-top: 15px;
		box-shadow: 0px 20px 30px 0px var(--shadow);
		background-color: var(--secondary);
		color: var(--deep-dark);
		border: 2px solid var(--dark);
		width: 200px;
		border-radius: 107px 85px 33px 21px / 21px 33px 85px 107px;
		padding: 10px;
		outline: none;
		text-align: center;
	}
	#dropdown-item:hover {
		transition: all 0.1s ease-in-out;
		border-radius: 107px 85px 33px 21px / 21px 33px 85px 107px;
		background-color: var(--light-glass);
	}
</style>
