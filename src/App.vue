<template>
	<div id="app" class="container">
		<div class="col">
			<toolBar />
			<cardsList />
		</div>
	</div>
</template>

<script>
	import toolBar from "./components/layout/toolBar.vue";
	import cardsList from "./components/main/cardsList";
	export default {
		name: "App",
		components: { toolBar, cardsList },
		created() {
			this.$store.dispatch("api_GetListOfTypes");
		},

		// Only for development
		/*************************************/
		computed: {
			state() {
				return this.$store.state;
			},
		},
		watch: {
			state: {
				immediate: true,
				deep: true,
				handler(state) {
					window.state = { ...state };
				},
			},
		},
		/*************************************/
	};
</script>

<style>
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
