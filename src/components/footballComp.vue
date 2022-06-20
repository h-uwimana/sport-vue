<template>
	<div class="bg-white">
		<section class="landing overflow-hidden">
			<div class="start position-relative overflow-hidden">
				<div class="position-absulte pt-4 d-flex justify-content-end pe-3">
					<img
						:src="require('@/assets/football/test.png')"
						alt=""
						class="backgroundImg w-50"
					/>
					<div
						class="position-absolute w-100 top-0 h-100 d-flex align-items-center justify-content-start"
					>
						<div
							class="titleDiv col-6 mb-5 h-100 py-5 ms-5 ps-5 d-flex align-items-center"
						>
							<h1 class="title pb-5 mb-5 ms-5 mt-5">
								Will he manage to grab his last chance to win a World Cup?
							</h1></div
						>
					</div>
				</div>
			</div>
		</section>

		<!-- -----------------------------------------test ---------------------------- -->
		<section
			class="
		"
		>
			<div class="">
				<div
					class="d-grid col-12 justify-content-center align-items-center font-weight-bold teamsSec"
				>
					<h2 class="text-center text-black py-4 teamsTitle"
						><strong> Get to know the Teams</strong>
					</h2>
				</div>
				<div class="teams d-flex align-items-center">
					<transition
						v-for="nummer in 4"
						:key="nummer"
						:class="col + ' p-0 Body w-10 h-100   '"
						:tag="'div-' + nummer"
					>
						<div class="">
							<div class="position-relative w-100 h-100">
								<div
									class="position-absulte w-100 h-100 d-flex align-items-center overflow-hidden bg-black"
								>
									<img
										id="teamLogo"
										:src="
											require('@/assets/football/teamslogo/' +
												teams[nummer - 1] +
												'.png')
										"
										alt=""
										class="h-100 w-100"
									/>
									<div
										class="position-absolute w-100 top-0 h-100 d-flex align-items-center justify-content-center"
									>
										<!-- <div
											class="h-100 w-100 opacity-75"
											:style="
												'background-color:' +
												'#' +
												Math.floor(Math.random() * 16777215).toString(16)
											"
										></div> -->
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { gsap } from "gsap";
	export default {
		data() {
			return {
				sports: ["Basketball", "F1 Racing", "Football"],
				col: "col-3",
				lastState: null,
				teams: ["brazil", "england", "germany", "france"],
				// routePush: () => {
				// 	return this.$router.push({ name: "about" });
				// },
			};
		},

		methods: {
			tween(name) {
				const routerPush = () => {
					this.$router.push({ name: name });
				};

				gsap.to(`.${name}`, {
					css: { flex: "0 0 auto", width: "100%" },
					duration: 1.2,
					onComplete: routerPush,
				});
			},
		},
	};
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
	}

	.titleDiv {
		padding-left: 8rem !important;
	}

	.fontS {
		font-size: 2.1rem !important;
	}

	.start {
		background-color: #0554f2;
		padding-top: 8rem !important;
	}
	.arrow-link:hover {
		color: #0d6efd !important;
	}

	/*----------------- test -----------------------*/

	.teams {
		overflow: auto !important;
		white-space: nowrap !important;
		height: 31.3rem !important;
	}

	.teamsTitle {
		font-weight: bold;
		font-size: 3rem !important;
	}

	/*-----------------van home ----------------------*/

	#teamLogo:hover {
		transform: scale(1.1) !important;

		opacity: 1 !important;
	}
	#teamLogo {
		transition: 1s;
		object-fit: cover !important;
	}
	#text {
		transition: 1s;
	}

	.Body:hover {
		cursor: pointer;
	}

	.Body:hover #text {
		opacity: 0;
	}
</style>
