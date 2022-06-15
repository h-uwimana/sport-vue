import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { gsap } from "gsap";
import "animate.css";

createApp(App).use(router).use(gsap).use(createPinia()).mount("#app");
