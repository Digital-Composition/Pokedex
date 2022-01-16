<template>
	<div id="background" class="pos-fixed l-0 r-0 t-0 b-0" v-show="ILoading == true">
		<div class="container">
			<div class="col">
				<div class="row justify-content-center">
					<img id="image" width="200px" height="200px" :src="img" />
					<span id="title" class="tx-30 tx-bold pos-absolute">Loading...</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
			};
		},
	};
</script>

<style scoped>
	.container {
		height: 100%;
	}
	#background {
		position: absolute;
		background-color: var(--light-glass);
		backdrop-filter: blur(2px);
	}
	#title {
		transform: rotate(-45deg);
		left: auto;
		right: auto;
		top: auto;
		bottom: auto;
		margin-right: 80px;
		margin-top: -20px;
		color: var(--deep-dark);
		text-shadow: 0px 1px 10px var(--shadow);
	}
	.col {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: center;
		height: 100%;
		align-items: center;
	}
</style>
