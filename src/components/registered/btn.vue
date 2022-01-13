<template>
	<div id="btn" :style="{ width: `${width}px`, height: `${height}px`, background: bgColor }">
		<i :class="`fa ${icon}`" :style="{ color: iconColor }"></i>
		<span>{{ text }}</span>
	</div>
</template>

<script>
	export default {
		props: {
			width: {
				type: Number,
				default: 120,
			},
			height: {
				type: Number,
				default: 20,
			},
			bgColor: {
				type: String,
				default: "transparent",
			},
			iconColor: {
				type: String,
				default: "var(--light)",
			},
			icon: {
				type: String,
				default: "",
			},
			text: {
				type: String,
				default: "",
			},
		},
	};
</script>

<style scoped>
	#btn {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		border: 2px solid var(--dark);
		border-radius: 5px;
		padding: 10px;
	}
	#btn:hover {
		opacity: 0.7;
	}
</style>
