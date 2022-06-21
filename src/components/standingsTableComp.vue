<template>
	<div>
		<div class="bg">
			<div id="" class="mt-3"></div>

			<div class="w-100 bg-white pb-3">
				<h1 class="standingsTile text-center">standings</h1>
			</div>

			<div
				class="rounded-3 bg-dark bg-opacity-75 container border border-bottom-0 border-left-2 border-right-2 border-top-2 border-warning w-50 testen d-flex justify-content-center align-items-center text-dark w-75"
			>
				<div id="" class="d-flex">
					<div
						id="ranglijst-podium"
						class="col d-grid align-items-bottom align-self-md-end"
					>
						<!-- hier komt een podium card via js -->
					</div>
					<div
						id="ranglijst-podium"
						class="col d-grid align-items-bottom align-self-md-end"
					>
						<!-- hier komt een podium card via js -->
					</div>
					<div
						id="ranglijst-podium"
						class="col d-grid align-items-bottom align-self-md-end"
					>
						<!-- hier komt een podium card via js -->
					</div>
				</div>
			</div>
			<!-- ----------------------------------------------standings----------------------------------------- -->
			<div class="d-grid align-self-center w-100 justify-content-center mt-3">
				<div class="mb-5" style="width: 69vw">
					<div class="list-group h-50">
						<div
							v-for="index in 9"
							:key="index"
							id="standing"
							href="#"
							class="py-3 list-group-item list-group-item-action d-flex justify-content-between"
						>
							<div class="d-flex gap-3" style="font-family: futura">
								<span class="display-9" style="font-family: futura">
									<strong> {{ index }} </strong>
								</span>
								<div
									id="standing-color"
									class="m-0 p-0 align-self-center"
									style="width: 5px; background-color: red; height: 17px"
								>
								</div>
								<span id="standing-name-driver"> </span>
							</div>
							<div class="d-flex gap-3"> hello </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				test: {},
			};
		},
		setup() {
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

			fetch(url, options)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					return data;
				})
				.catch((error) => {
					console.error("Error:", error);
				})
				.then(() => {});
		},
	};
</script>
<style scoped>
	.bg {
		background-color: #056cf2 !important;
	}

	.standingsTile {
		font-weight: bold;
		font-size: 3rem !important;
	}
</style>
