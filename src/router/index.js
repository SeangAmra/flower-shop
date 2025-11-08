import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import Single from '../views/single.vue';
import Bouquet from '../views/bouquet.vue';
import ViewAll from '../views/viewall.vue';
import LogIn from '../components/LogIn.vue';
import Service from '../components/Service.vue';
import comment from '../views/comment.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  { path: '/single', component: Single },
  { path: '/bouquet', component: Bouquet },
  { path: '/viewall', component: ViewAll },
  { path: '/LogIn', component: LogIn},
  { path: '/Service', component: Service},
  { path: '/Comment', component: comment },
  // ...existing routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
