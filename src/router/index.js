import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blogs from "../components/Blogs.vue";
import SingleBlog from "../components/SingleBlog.vue";
import Contact from "../components/Contact.vue";
import Paris from "../components/Paris";
import Skincare from "../components/Skincare";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Profile from "../components/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/blog/:id",
    name: "SingleBlog",
    component: SingleBlog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/paris",
    name: "Paris",
    component: Paris,
  },
  {
    path: "/skincare",
    name: "Skincare",
    component: Skincare,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/Login', '/Register', 'Home'];
//   const authrequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if(to.path == '/Profiles' || to.path == '/Blogs' && !loggedIn) next({name: 'Register'})
//   else next()
// });

export default router;
