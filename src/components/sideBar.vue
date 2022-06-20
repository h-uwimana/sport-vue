<template>
	<div>
		<nav class="nav navbar-light position-fixed sticky-top bg-opacity-75">
			<ul class="col navbar-nav p-4 flex-column">
				<div v-if="this.$route.name != 'home'">
					<li class="nav-item">
						<router-link class="nav-link nav-link text-warning bold" to="/"
							><strong> home </strong></router-link
						>
					</li>
					<li class="nav-item dropdown dropend">
						<a
							class="nav-link dropdown-toggle text-warning"
							href="#"
							id="dropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<strong> Sports </strong>
						</a>
						<div class="dropdown-menu" aria-labelledby="dropdown">
							<router-link class="dropdown-item" to="Football"
								>Football</router-link
							>

							<router-link class="dropdown-item" to="Basketball"
								>Basketball</router-link
							>

							<router-link class="dropdown-item" to="F1Racing"
								>F1 Racing</router-link
							>
						</div>
					</li>
				</div>
				<li class="nav-item">
					<router-link to="/about" class="nav-link text-warning">
						<strong> About us </strong>
					</router-link>
				</li>

				<li class="nav-item">
					<router-link to="/contact" class="nav-link text-warning">
						<strong> contact </strong>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "sideBar",
	};
</script>

<style scoped>
	.nav {
		top: 3.6rem !important;
	}

	ul {
		margin-top: 5rem !important;
	}

	a {
		font-size: 1.4rem !important;
		transition: all 0.2s ease-in-out !important;
	}

	a:hover {
		font-size: 1.6rem !important;
	}

	.text-warning {
		color: #f2c53d !important;
	}
</style>
