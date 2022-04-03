import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/BotSettingsView.vue"),
  },
  {
    path: "/comment",
    name: "comment",
    component: () => import("../views/CommentCreatorView.vue"),
  },
];

const router = createRouter({
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes: routes,
});

export default router;
