<template>
	<div
		id="card"
		class="col"
		:style="{
			'max-width': `${mxWidth}px`,
			width: `${width}px`,
			'min-height': `${mnHeight}px`,
			height: `${height}px`,
			background: bgColor,
			'box-shadow': shadow ? '0px 8px 8px -5px var(--shadow)' : '',
			border: border ? '2px solid var(--dark)' : '',
		}"
	>
		<div class="row" v-if="img">
			<img :src="img" alt="Girl in a jacket" width="100%" height="100%" />
		</div>
		<div class="row">
			<span :style="{ 'font-size': `${textSize}px`, color: textColor }">{{
				text.length == 3
					? `${text}`
					: text.length == 2
					? `0${text}`
					: text.length == 1
					? `00${text}`
					: text
			}}</span>
		</div>
		<div class="row">
			<span
				class="tx-bold"
				:style="{ 'text-transform': 'uppercase', 'font-size': `${titleSize}px`, color: titleColor }"
				>{{ title }}</span
			>
		</div>
		<div class="row">
			<card
				class="pa-0 text-center"
				:style="{ 'max-width': `${typesSize}px` }"
				:text="type.type.name"
				:textSize="15"
				:textColor="'var(--dark)'"
				v-for="(type, i) in types"
				:key="i"
				>{{ type }}</card
			>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		computed: mapState({
			ListOfTypes: (state) => state.ListOfPokemon,
		}),
		props: {
			width: {
				type: Number,
			},
			height: {
				type: Number,
			},
			mxWidth: {
				type: Number,
			},
			mnHeight: {
				type: Number,
			},
			bgColor: {
				type: String,
			},
			img: {
				type: String,
			},
			title: {
				type: String,
			},
			titleSize: {
				type: Number,
				default: 15,
			},
			titleColor: {
				type: String,
				default: "var(--light)",
			},
			text: {
				type: String,
				default: "",
			},
			textSize: {
				type: Number,
				default: 12,
			},
			textColor: {
				type: String,
				default: "var(--light)",
			},
			types: {
				type: Array,
			},
			typesSize: {
				type: Number,
			},
			shadow: {
				type: Boolean,
			},
			border: {
				type: Boolean,
			},
		},
	};
</script>

<style scoped>
	#card {
		display: inline-block;
		text-align: center;
		vertical-align: middle;

		border-radius: 5px;
		padding: 10px;
	}
	#btn:hover {
		opacity: 0.7;
	}
</style>
