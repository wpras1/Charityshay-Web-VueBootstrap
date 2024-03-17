import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

// Component Home Page
import HomeNavbar from "./components/homePage/homeNavbar.vue";
import HomeHero from "./components/homePage/homeHero.vue";
import HomeServices from "./components/homePage/homeServices.vue";

// Component About Page
import AboutNavbar from "./components/aboutPage/aboutNavbar.vue";
import AboutTitle from "./components/aboutPage/aboutTitle.vue";
// Component Causes Page
import CausesNavbar from "./components/causesPage/causesNavbar.vue";
import CausesTitle from "./components/causesPage/causesTitle.vue";
// Component Blog Page
import BlogNavbar from "./components/blogPage/blogNavbar.vue";
import BlogTitle from "./components/blogPage/blogTitle.vue";
// Component Event Page
import EventNavbar from "./components/eventPage/eventNavbar.vue";
import EventTitle from "./components/eventPage/eventTitle.vue";
// Component Contact Page
import ContactNavbar from "./components/contactPage/contactNavbar.vue";
import ContactTitle from "./components/contactPage/contactTitle.vue";

const app = createApp(App);

// Component Home Page
app.component("homeHero", HomeHero);
app.component("homeNavbar", HomeNavbar);
app.component("homeServices", HomeServices);

// Component About Page
app.component("aboutNavbar", AboutNavbar);
app.component("aboutTitle", AboutTitle);
// Component Causes Page
app.component("causesNavbar", CausesNavbar);
app.component("causesTitle", CausesTitle);
// Component Blog Page
app.component("blogNavbar", BlogNavbar);
app.component("blogTitle", BlogTitle);
// Component Event Page
app.component("eventNavbar", EventNavbar);
app.component("eventTitle", EventTitle);
// Component Contact Page
app.component("contactNavbar", ContactNavbar);
app.component("contactTitle", ContactTitle);

app.use(router);
app.mount("#app");
