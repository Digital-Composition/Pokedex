<template>
	<div id="btn" :style="{ width: `${width}px`, background: bgColor }">
		<i class="fa fa-search"></i>
	</div>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 120,
			},
			bgColor: {
				type: String,
				default: "transparent",
			},
		},
	};
</script>

<style scoped>
	#btn {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		border: 1px solid transparent;
		padding: 10px;
	}
</style>
