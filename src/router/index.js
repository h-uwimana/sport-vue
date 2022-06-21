import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import info from "@/components/racerComp.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue"),
	},
	{
		path: "/F1Racing",
		name: "F1Racing",
		component: () => import("../views/f1View"),
		props: (route) => ({
			...route.params,
			id: parseInt(route.params.id),
		}),
	},
	{
		path: "/Football",
		name: "Football",
		component: () => import("../views/FootballView"),
		props: (route) => ({
			...route.params,
			id: parseInt(route.params.id),
		}),
	},
	{
		path: "/Basketball",
		name: "Basketball",
		component: () => import("../views/BasketballView"),
		props: (route) => ({
			...route.params,
			id: parseInt(route.params.id),
		}),
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/contactView"),
	},
	{
		path: "/:id",
		name: "info",
		component: info,
		props: (route) => ({
			...route.params,
			id: route.params.id,
		}),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
