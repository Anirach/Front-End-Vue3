import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Book from "./components/Book.vue";
import Create from "./components/Create.vue";
import Update from "./components/Update.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/book/:id", component: Book },
    { path: "/create", component: Create },
    { path: "/update/:id", component: Update },
  ],
});

export default router;
