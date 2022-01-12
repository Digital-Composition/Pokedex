<template>
	<div id="toolbar" class="col">
		<div class="row">
			<span>Name or Number</span>
		</div>
		<div class="row">
			<input-field />
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#toolbar {
		background: var(--base-glass);
		border-radius: 0px 0px 10px 10px;
		box-shadow: 0px 8px 8px -5px var(--shadow);
		height: 100px;
		padding: 10px;
		backdrop-filter: blur(2px);
	}
	span {
		color: var(--light);
		padding: 5px;
	}
</style>
