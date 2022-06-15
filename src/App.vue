<template lang="vue">
<nav class="mb-3 py-2">
  <div class="position-relative w-100 d-flex justify-content-center align-items-center">
  <img :src="require('@/assets/S4U.svg')" alt="">
  </div>
		
	</nav>
<sideBar />
<router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
</template>
<script>
	import sideBar from "@/components/sideBar";

	export default {
		components: {
			sideBar,
		},
	};
</script>

<style scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	nav {
		height: 4rem !important;
	}

	img {
		top: 0;
		position: absolute;
		width: 9rem !important;
		height: 4rem !important;
		object-fit: cover;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
