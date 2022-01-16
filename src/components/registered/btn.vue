<template>
	<div
		id="btn"
		:style="{
			width: `${width}px`,
			height: `${height}px`,
			background: bgColor,
			border: border == true ? '2px solid var(--deep-dark)' : 'none',
			'border-radius': borderRadius,
		}"
		@click="action ? action() : null"
	>
		<i :class="`fa ${start_icon}`" :style="{ color: iconColor, 'font-size': `${iconSize}px` }"></i>
		<span :class="[text ? 'mx-10' : '']" :style="{ color: textColor }">{{ text }}</span>
		<i :class="`fa ${end_icon}`" :style="{ color: iconColor, 'font-size': `${iconSize}px` }"></i>
	</div>
</template>

<script>
	export default {
		props: {
			action: {
				type: Function,
			},
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
			iconSize: {
				type: Number,
			},
			start_icon: {
				type: String,
			},
			end_icon: {
				type: String,
			},
			text: {
				type: String,
			},
			textColor: {
				type: String,
			},
			border: {
				type: Boolean,
				default: true,
			},
			borderRadius: {
				type: String,
				default: "5px",
			},
		},
	};
</script>

<style scoped>
	#btn {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		border-radius: 5px;
		padding: 10px;
	}
	span {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}
	#btn:hover {
		opacity: 0.7;
	}
</style>
