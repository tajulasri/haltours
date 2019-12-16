import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Home from "./views/Home";
import Staff from "./views/Staff";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/main",
      name: "main",
      component: () => import("./views/Main.vue")
    },
    {
      path: "/staffs",
      name: "staffs",
      component: Staff
    },

  ]
});
