const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "Cadastrar", component: () => import("pages/Cadastrar.vue") },
      { path: "Raphael", component: () => import("pages/Raphael.vue") },
      { path: "Ambos", component: () => import("pages/Ambos.vue") },
      { path: "Rhaissa", component: () => import("pages/Rhaissa.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
