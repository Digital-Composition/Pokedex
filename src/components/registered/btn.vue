<template>
	<div id="btn" :style="{ width: `${width}px`, height: `${height}px`, background: bgColor }">
		<i :class="`fa ${icon}`" :style="{ color: iconColor }"></i>
		<span :style="{ color: textColor }">{{ text }}</span>
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
			},
			iconColor: {
				type: String,
			},
			icon: {
				type: String,
			},
			text: {
				type: String,
			},
			textColor: {
				type: String,
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
