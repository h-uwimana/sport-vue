<template>
	<div class="bg-white">
		<section class="landing">
			<div class="start position-relative overflow-hidden h-100">
				<div class="position-absulte">
					<img
						:src="require('@/assets/Basketball/test.png')"
						alt=""
						class="backgroundImg w-75"
					/>
					<div
						class="position-absolute w-100 top-0 h-100 d-flex align-items-center justify-content-end"
					>
						<div class="col-6 h-100 py-5 ps-3 d-flex align-items-center">
							<h1 class="title pb-5 mb-5 ms-5"
								>Storylines and tension abound in these Finals with
								Cleveland</h1
							></div
						>
					</div>
				</div>
			</div>
		</section>
		<section class="second">
			<div class="p-5"> </div>
		</section>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.backgroundImg {
		object-fit: fill;
		transition: 1s;
	}
	.title {
		font-family: montserrat, sans-serif;
		font-weight: bold;
		color: white !important;
		inline-size: 30rem !important;
	}
	.second {
		height: 15rem !important;
	}

	.landing {
		overflow: hidden !important;
		height: 100vh;
	}
	.fontS {
		font-size: 2.1rem !important;
	}

	.start {
		background-image: linear-gradient(#b30410, blue) !important;
		padding-top: 8rem !important;
	}
	.arrow-link:hover {
		color: #0d6efd !important;
	}
</style>
