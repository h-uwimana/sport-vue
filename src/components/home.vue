<template>
	<div class="home">
		<div class="d-grid vh-100 vw-100">
			<div class="row">
				<transition
					v-for="nummer in 3"
					:key="nummer"
					@click="tween(sports[nummer - 1].replace(/\s/g, ''))"
					:class="
						col +
						' p-0 Body Pagina animate__fadeInLeft ' +
						sports[nummer - 1].replace(/\s/g, '')
					"
					:id="sports[nummer - 1].replace(/\s/g, '')"
					tag="div"
				>
					<div class="vh-100 bg-black">
						<div class="position-relative overflow-hidden">
							<div class="position-absulte">
								<img
									id="backgroundImg"
									:src="require('@/assets/achtergrond' + nummer + '.jpg')"
									alt=""
									class="backgroundImg bgImg w-100 vh-100 opacity-25"
								/>
								<div
									class="position-absolute w-100 top-0 h-100 d-flex align-items-center justify-content-center"
								>
									<h1 id="text" class="text-white fw-bold">
										{{ sports[nummer - 1] }}
									</h1>
								</div>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import { gsap } from "gsap";
	// import flip from "gsap/Flip";
	import gsapCSS from "gsap/CSSRulePlugin";

	gsap.registerPlugin(gsapCSS);

	export default {
		name: "HelloWorld",
		data() {
			return {
				sports: ["Basketball", "F1 Racing", "Football"],
				col: "col",
				lastState: null,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.backgroundImg {
		object-fit: cover;
		transition: 1s;
	}

	.Body:hover #backgroundImg {
		transform: scale(1.2);

		opacity: 1 !important;
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
	.home {
		background-color: black;
	}
</style>
