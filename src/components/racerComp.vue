<template>
	<div class="bg vw-100 vh-100 d-flex align-items-center">
		<div class="w-100 h-75 bg-white mt-5 d-flex">
			<div class="d-flex justify-content-centerr w-100">
				<div class="col-5 py-5 ps-5">
					<img
						class="ms-5 h-100"
						:src="
							require('@/assets/img/red_bull/max-verstappen/max-verstappen-metAchtergrond.jpeg')
						"
						alt=""
					/>
				</div>

				<div
					class="mb-5 col-5 d-flex justify-content-center align-items-center"
				>
					<div class="">
						<table class="">
							<tbody class="">
								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Team</span>
									</th>
									<td class="stat-value">Red Bull Racing</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Country</span>
									</th>
									<td class="stat-value">Netherlands</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Podiums</span>
									</th>
									<td class="stat-value">67</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Points</span>
									</th>
									<td class="stat-value">1732.5</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Grands Prix entered</span>
									</th>
									<td class="stat-value">150</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">World Championships</span>
									</th>
									<td class="stat-value">1</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Highest race finish</span>
									</th>
									<td class="stat-value">1 (x26)</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Highest grid position</span>
									</th>
									<td class="stat-value">1</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Date of birth</span>
									</th>
									<td class="stat-value">30/09/1997</td>
								</tr>

								<tr>
									<th scope="row" class="stat-key">
										<span class="text">Place of birth</span>
									</th>
									<td class="stat-value">Hasselt, Belgium</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			routeId() {
				return this.$route.params.id;
			},
		},
	};
</script>
<style>
	.bg {
		background-color: #0554f2 !important;
	}
</style>
