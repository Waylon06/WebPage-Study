import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/home/home");
const Order = () => import("../views/order/order");
const Message = () => import("../views/message/message");
const Mine = () => import("../views/mine/mine");
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/message",
    component: Message
  },
  {
    path: "/mine",
    component: Mine
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
