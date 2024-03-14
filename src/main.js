import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { createApp } from "vue";
import App from "./App.vue";
import HomeNavbar from "./components/homePage/homeNavbar.vue";
import HomeHero from "./components/homePage/homeHero.vue";
import HomeServices from './components/homePage/homeServices.vue'

const app = createApp(App);

app.component("homeHero", HomeHero);
app.component("homeNavbar", HomeNavbar);
app.component('homeServices', HomeServices);
app.mount("#app");
