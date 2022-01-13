<template>
	<div id="card">
		<div class="row justify-content-center" v-if="img">
			<img :src="img" width="60%" height="60%" />
		</div>
		<div class="row px-10">
			<span id="id" class="tx-13 tx-bold"
				>#{{
					id.length == 3
						? `${id}`
						: id.length == 2
						? `0${id}`
						: id.length == 1
						? `00${id}`
						: id
				}}</span
			>
		</div>
		<div class="row px-10">
			<span id="name" class="tx-16 tx-bold">{{ name.toUpperCase() }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["img", "name", "id", "types"],
	};
</script>

<style scoped>
	#card {
		background-color: var(--base);
		margin: 10px;
		border: 2px solid var(--dark);
		border-radius: 5px;
      box-shadow: 0px 8px 10px 0px var(--shadow);
	}
	#id {
		color: var(--dark);
	}
	#name {
		color: var(--dark);
	}
</style>
