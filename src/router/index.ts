import { createRouter, createWebHistory } from 'vue-router';
import Author from '../components/Author.vue';
const routes = [{ path: '/author', component: Author, name: 'author' }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
