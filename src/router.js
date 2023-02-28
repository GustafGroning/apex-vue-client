import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import TestComponent from './components/TestComponent.vue';
import HomePage from './components/HomePage.vue';
import TaskForm from './components/TaskForm.vue';

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  { path: '/test', component: TestComponent },
  {path: '/homepage', component: HomePage},
  {path: '/task/add', component: TaskForm}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
