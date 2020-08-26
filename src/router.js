import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Song from "./views/Song.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/song",
      name: "song",
      component: Song
    }
  ]
});
