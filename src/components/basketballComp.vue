<template>
	<div>
		<section class="start bg-white">
			<div class="h-100 position-relative overflow-hidden">
				<div class="position-absulte">
					<img
						:src="require('@/assets/Basketball/achtergrond1.jpg')"
						alt=""
						class="backgroundImg w-100"
					/>
					<div
						class="position-absolute w-100 top-0 h-100 d-flex align-items-center"
					>
						<div class="col-1"></div>
						<header
							class="col-6 d-grid align-self-center p-5 bg-dark bg-opacity-75 rounded-3 text-white"
						>
							<h1 id="title" class="display-2 font-weight-bolder">
								<strong>
									Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</strong
								>
							</h1>
							<div class="d-flex">
								<p href="#" class="h5 text-warning">
									<a class="nav-link text-warning arrow-link fs-3" href="#">
										<small>See Standings</small>
									</a>
								</p>
								<a href="#" class="nav text-warning">
									<i
										href="#"
										class="bi warning bi-arrow-right arrow-link fontS h4 pt-md-2 ps-3 bg-opacity-0"
										type="link"
									></i>
								</a>
							</div>
						</header>
					</div>
					<section class="d-block col-12 vw-100">
						<div class="py-5 bg-white"> <h1>hello</h1></div>
					</section>
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
		object-fit: cover;
		transition: 1s;
	}
	img {
		height: 45rem !important;
	}

	.fontS {
		font-size: 2.1rem !important;
	}

	.start {
		background-color: white !important;
	}
	.arrow-link:hover {
		color: #0d6efd !important;
	}
</style>
