<template>
	<div id="app" class="container">
		<toolbar />
	</div>
</template>

<script>
	import toolbar from "./components/layout/toolbar.vue";
	export default {
		name: "App",
		components: { toolbar },
	};
</script>

<style>
	@import "./css/flex-style.css";
	@import "./css/font-style.css";
	@import "./css/size-position-style.css";
	@import "./css/custom-style.css";
	@import "./css/font-awesome/css/font-awesome.css";

	html {
		background-image: url("~@/assets/app-bg.svg");
		background-attachment: fixed;
		background-position: center;
	}
</style>
