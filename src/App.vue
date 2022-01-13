<template>
	<div id="app" class="container">
		<toolbar />

		<listOfPokemon />
	</div>
</template>

<script>
	import toolbar from "./components/layout/toolbar.vue";
	import listOfPokemon from "./components/listOfPokemon";
	export default {
		name: "App",
		components: { toolbar, listOfPokemon },
	};
</script>

<style>
	@import "./css/flex-style.css";
	@import "./css/font-style.css";
	@import "./css/size-position-style.css";
	@import "./css/custom-style.css";
	@import "./css/margin-style.css";
	@import "./css/padding-style.css";
	@import "./css/font-awesome/css/font-awesome.css";

	html {
		background-image: url("~@/assets/app-bg.svg");
		background-attachment: fixed;
		background-position: center;
	}
</style>
