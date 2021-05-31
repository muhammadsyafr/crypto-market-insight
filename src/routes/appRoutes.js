import { Homepage, About, Login, Register, CoinDetail } from "pages";

const appRoutes = [
  {
    name: "About",
    component: About,
    exact: true,
    path: "/about",
    key: "about"
  },
  {
    name: "Homepage",
    component: Homepage,
    exact: true,
    path: "/",
    key: "homepage"
  },
  {
    name: "Login",
    component: Login,
    exact: true,
    path: "/login",
    key: "login"
  },
  {
    name: "Register",
    component: Register,
    exact: true,
    path: "/register",
    key: "register"
  },
  {
    name: "Coin Detail",
    component: CoinDetail,
    exact: true,
    path: "/coin/:id",
    key: "coin"
  }
];

export default appRoutes;
