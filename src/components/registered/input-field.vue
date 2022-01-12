<template>
	<input
		id="input-field"
		type="text"
		:style="{ width: `${width}px`, height: `${height}px`, background: bgColor }"
	/>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 200,
			},
			height: {
				type: Number,
				default: 20,
			},
			bgColor: {
				type: String,
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
		border-radius: 5px;
		padding: 10px;
		outline: none;
	}
</style>
