<template>
	<div id="card" :style="{ 'border-radius': getRandomBorderRadius() }">
		<div class="row justify-content-center" v-if="img">
			<img :src="img" width="65%" height="65%" />
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
					background: IGetColorForType(type.type.name).color,
					color: IGetColorForType(type.type.name).fColor,
				}"
			>
				{{ type.type.name.toUpperCase() }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["img", "name", "id", "types"],
		methods: {
			getRandomBorderRadius() {
				let options = [
					"83px 35px 108px 24px / 24px 108px 35px 83px",
					"107px 85px 33px 21px / 21px 33px 85px 107px",
					"110px 32px 84px 22px / 22px 84px 32px 110px",
					"83px 114px 38px 23px / 23px 38px 114px 83px",
					"109px 30px 89px 21px / 21px 89px 30px 109px",
				];
				return options[Math.floor(Math.random() * (options.length - 0))];
			},
		},
	};
</script>

<style scoped>
	#card {
		background-color: var(--base-glass);
		margin: 10px;
		border: 2px solid var(--dark);
		backdrop-filter: blur(1px);
		box-shadow: 0px 10px 18px -1px var(--shadow);
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
