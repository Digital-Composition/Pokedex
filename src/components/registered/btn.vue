<template>
	<div class="btn" :style="{ width: width, background: bgColor }">
		<i class="fa fa-search"></i>
	</div>
</template>

<script>
	export default {
		props: {
			width: {
				type: String,
				default: "120px",
			},
			bgColor: {
				type: String,
				default: "transparent",
			},
		},
	};
</script>

<style scoped>
	.btn {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		border: 1px solid transparent;
		padding: 10px;
	}
</style>
