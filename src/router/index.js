import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/Dashboard.vue";
import AboutView from "@/views/About.vue";
import CausesView from "@/views/Causes.vue";
import BlogView from "@/views/Blog.vue";
import EventView from "@/views/Event.vue";
import ContactView from "@/views/Contact.vue";

const routes = [
  { path: "", component: DashboardView },
  { path: "/about", component: AboutView },
  { path: "/causes", component: CausesView },
  { path: "/blog", component: BlogView },
  { path: "/event", component: EventView },
  { path: "/contact", component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
