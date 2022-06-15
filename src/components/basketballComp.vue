<template>
	<div>
		<div class="start bg-black">
			<div class="position-relative overflow-hidden">
				<div class="position-absulte">
					<img
						:src="require('@/assets/achtergrond1.jpg')"
						alt=""
						class="backgroundImg w-100 opacity-25"
					/>
					<div
						class="position-absolute w-100 top-0 h-100 d-flex align-items-center justify-content-center"
					>
						<h1 id="text" class="text-white fw-bold">hello </h1>
					</div>
				</div>
			</div>
		</div></div
	>
</template>

<script>
	export default {};
</script>

<style>
	.backgroundImg {
		object-fit: cover;
		transition: 1s;
	}
	.start {
		height: 5vh;
	}
</style>
