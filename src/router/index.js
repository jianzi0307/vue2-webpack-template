import Vue from "vue";

import VueRouter from "vue-router";

import beforeEach from "./beforeEach";
import afterEach from "./afterEach";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: VITE_BASE_URL,
  routes: routes,
});

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return originPush.call(this, to).catch((err) => err);
};

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
