<template>
	<input id="input-field" type="text" v-model="SearchCriteria" />
</template>

<script>
	export default {
		computed: {
			SearchCriteria: {
				get() {
					return this.$store.SearchCriteria;
				},
				set(value) {
					this.$store.dispatch("handle_SearchCriteria", value);
				},
			},
		},
	};
</script>

<style scoped>
	#input-field {
		display: inline-block;
		vertical-align: middle;
		background-color: var(--light);
		border: 2px solid var(--dark);
		width: 200px;
		border-radius: 83px 35px 108px 24px / 24px 108px 35px 83px;
		padding: 10px;
		outline: none;
	}
</style>
