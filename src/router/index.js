import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
	},
	{
		path: "/Football",
		name: "Football",
		component: () => import("../views/FootballView"),
	},
	{
		path: "/Basketball",
		name: "Basketball",
		component: () => import("../views/BasketballView"),
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/contactView"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
