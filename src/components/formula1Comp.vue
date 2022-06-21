<template>
	<div class="bg-white">
		<section class="landing overflow-hidden">
			<div class="start position-relative overflow-hidden">
				<div class="position-absulte pt-4 d-flex justify-content-start pe-3">
					<img
						:src="require('@/assets/formula1/test.png')"
						alt=""
						class="backgroundImg w-50"
					/>
					<div
						class="position-absolute titleDiv w-100 top-0 h-100 ms-5 d-flex align-items-center justify-content-center"
					>
						<div
							class="col-6 mb-5 h-100 py-5 d-flex align-items-center justify-content-center"
						>
							<h1 class="title ms-5">
								Can redbull with the help from max finally stop the mercedes
								domination?
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
						><strong> Get to know the Racers</strong>
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
									<router-link
										:to="{
											name: 'info',
											params: {
												id: driversCard[nummer - 1],
											},
										}"
									>
										<img
											id="teamLogo"
											:src="
												require('@/assets/formula1/racers/' +
													driversCard[nummer - 1] +
													'.jpg')
											"
											alt=""
											class="h-100 w-100"
										/>
									</router-link>
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</section>

		<test />
	</div>
</template>

<script>
	import { gsap } from "gsap";
	import data from "@/fetch/f1data.js";
	import test from "@/components/standingsTableComp.vue";

	console.log(data);
	export default {
		data() {
			return {
				// sports: ["Basketball", "F1 Racing", "Football"],
				col: "col-3",
				lastState: null,
				driversCard: [
					"charles-leclerc",
					"lando-norris",
					"lewis-hamiltion",
					"max-verstappen",
				],
			};
		},

		components: {
			test,
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

		async beforeMount() {
			const url = `https://ergast.com/api/f1/current/driverStandings.json`;

			const options = {
				method: "GET",
				Host: "api.aladhan.com",
				scheme: "https",
				Accept: "*/*",
				"Access-Control-Allow-Origin": "*",
				headers: {
					// no headers athorwise it wont work
				},
			};

			await fetch(url, options)
				.then((response) => response.json())
				.then((data) => {
					return data;
				})
				.catch((error) => {
					console.error("Error:", error);
				})
				.then(() => {});
		},

		computed: {
			routeId() {
				return this.$route.params.id;
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
		padding-left: 15rem !important;
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

	a {
		text-decoration: none !important;
	}
</style>
