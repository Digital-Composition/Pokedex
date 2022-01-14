<template>
	<div id="card">
		<div class="row justify-content-center" v-if="img">
			<img :src="img" width="60%" height="60%" />
		</div>
		<div class="row px-10">
			<span id="id" class="tx-12 tx-bold"
				>#{{
					id.length == 3 ? `${id}` : id.length == 2 ? `0${id}` : id.length == 1 ? `00${id}` : id
				}}</span
			>
		</div>
		<div class="row px-10">
			<span id="name" class="tx-14 tx-bold">{{ name.toUpperCase() }}</span>
		</div>
		<div class="row pl-10">
			<span
				id="type"
				class="tx-10 mr-10"
				v-for="(type, i) in types"
				:key="i"
				:style="{
					background: getColorForType(type.type.name).color,
					color: getColorForType(type.type.name).fColor,
				}"
			>
				{{ type.type.name.toUpperCase() }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["img", "name", "id", "types", "typesAndColors"],
		methods: {
			getColorForType(type) {
				for (let i = 0; i < this.typesAndColors.length; i++) {
					const item = this.typesAndColors[i];
					if (item.name == type) return item;
				}
			},
		},
	};
</script>

<style scoped>
	#card {
		background-color: var(--base-glass);
		margin: 10px;
		border: 2px solid var(--dark);
		border-radius: 120px 90px 40px 20px/60px 40px 90px 120px;
		backdrop-filter: blur(1px);
		box-shadow: 0px 8px 10px 0px var(--shadow);
		padding: 5px;
	}
	#card:hover {
		transition: all 0.2s ease-in-out;
		transform: rotate(1deg);
	}
	#id {
		color: var(--dark);
	}
	#name {
		color: var(--dark);
	}
	#type {
		color: var(--dark);
		padding: 1px 5px;
		border-radius: 10px;
		border: 2px solid var(--deep-dark);
		margin-top: 2px;
	}
</style>
