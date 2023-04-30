import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/GeneralCalculator.vue"),
  },
  {
    path: "/testing",
    name: "testing",
    component: () => import("../views/Testing.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
