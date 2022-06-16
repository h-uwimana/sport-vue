<template>
	<div>
		<section class="start bg-white">
			<div class="position-relative">
				<div class="position-absulte">
					<img
						:src="require('@/assets/Basketball/test.png')"
						alt=""
						class="backgroundImg w-75"
					/>
					<div
						class="position-absolute w-100 top-0 h-100 d-flex align-items-center justify-content-end"
					>
						<div class="col-5 h-100 py-5 ps-3 d-flex align-items-center">
							<h1 class="title display-5">Know the game </h1></div
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.backgroundImg {
		object-fit: contain;
		transition: 1s;
	}
	img {
		height: 41.4rem !important;
	}
	.title {
	}
	.fontS {
		font-size: 2.1rem !important;
	}

	.start {
		background-color: #0554f2 !important;
		padding-top: 8rem !important;
	}
	.arrow-link:hover {
		color: #0d6efd !important;
	}
</style>
