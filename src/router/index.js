import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/music",
    name: "Music",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Music.vue")
  },
  {
    path: "/playlist",
    name: "Playlist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/Playlists.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../components/AddSong.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to.name, localStorage.getItem("isAuth"));
  if (to.name === "Login" && localStorage.getItem("isAuth"))
    next({ name: "Home" });
  else if (to.name !== "Login" && !localStorage.getItem("isAuth"))
    next({ name: "Login" });
  else next();
});

export default router;
