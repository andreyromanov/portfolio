import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/skills",
    name: "skills",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Skills.vue")
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue")
  },
  {
    path: "/skytex",
    name: "skytex",
    meta: {layout: "top_menu"},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/projects/skytex.vue")
  },
  {
    path: "/mebtex",
    name: "mebtex",
    meta: {layout: "top_menu"},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/projects/mebtex.vue")
  },
  {
    path: "/uatao",
    name: "uatao",
    meta: {layout: "top_menu"},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/projects/uatao.vue")
  },
  {
    path: "/wrapcrowd",
    name: "wrapcrowd",
    meta: {layout: "top_menu"},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/projects/wrapcrowd.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
