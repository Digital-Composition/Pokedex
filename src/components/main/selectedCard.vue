<template>
	<div id="background" class="pos-fixed l-0 r-0 t-0 b-0">
		<div id="selected-card">
			<div class="container">
				<div class="col">
					<div class="row justify-content-end">
						<btn
							:start_icon="'fa-close'"
							:border="false"
							:iconSize="30"
							:width="60"
							:iconColor="'var(--deep-dark)'"
						/>
					</div>
					<div class="row justify-content-center">
						<span>Bulbasour</span>
					</div>
					<div class="row justify-content-center">
						<div class="col-sm-6">asdasd</div>
						<div class="col-sm-6">asdasd</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#background {
		position: absolute;
		background-color: var(--base-glass);
	}
	#selected-card {
		border: 2px solid var(--dark);
		border-radius: 5%;
		position: absolute;
		background-color: var(--base-glass);
		backdrop-filter: blur(20px);
		box-shadow: 0px 10px 40px 0px var(--shadow);
	}

	@media (min-width: 0px) {
		#selected-card {
			left: 5%;
			right: 5%;
			top: 5%;
			bottom: 5%;
		}
	}

	@media (min-width: 800px) {
		#selected-card {
			left: 15%;
			right: 15%;
			top: 10%;
			bottom: 10%;
		}
	}

	@media (min-width: 1200px) {
		#selected-card {
			left: 25%;
			right: 25%;
			top: 10%;
			bottom: 10%;
		}
	}
</style>
