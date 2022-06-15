<template>
	<HelloWorld @vnode-mounted="beforeEnter" />
</template>

<script>
	// @ is an alias to /src
	import { gsap } from "gsap";
	import HelloWorld from "@/components/home.vue";
	import flip from "gsap/Flip";

	gsap.registerPlugin(flip);

	export default {
		name: "HomeView",
		components: {
			HelloWorld,
		},
		data() {
			return {
				lastState: null,
			};
		},
		methods: {
			beforeEnter: () => {
				gsap.from(".Basketball", {
					scale: 0.8,
					x: -550,
					duration: 1,
				});
				gsap.from(".Football", {
					scale: 0.8,
					x: 500,
					duration: 1,
					delay: 0.2,
				});
				gsap.from(".F1Racing", {
					scale: 0.3,
					duration: 1,
					delay: 0.2,
				});
				gsap.from(".backgroundImg", {
					opacity: 1,
					x: "random(-200,500,98)",
					y: 500,
					duration: 1,
				});
			},
		},
		// setup() {
		// 	const beforeEnter = () => {
		// 		gsap.from(".Basketball", { x: 0, opacity: 0, duration: 2 });
		// 	};
		// 	return { beforeEnter };
		// },
	};
</script>
