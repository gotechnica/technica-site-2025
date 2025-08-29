import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import ViewHacker from '../views/ViewHacker.vue';
import Write from '../views/Write.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: (route) => ({ email: route.query.email })
  },
  {
    path: '/',
    name: 'Check In',
    component: Home,
  },
  {
    path: '/view',
    name: 'ViewHacker',
    component: ViewHacker,
    props: (route) => ({ email: route.query.email, firstName: route.query.firstName})
  },
  {
    path: '/write',
    name: 'Write',
    component: Write,
    props: (route) => ({ email: route.query.email, firstName: route.query.firstName })
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!Vue.cookie.get('token') && (to.name !== 'login')) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
