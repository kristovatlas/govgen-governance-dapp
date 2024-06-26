import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CreateProposalView from "@/views/CreateProposalView.vue";
import ProposalView from "@/views/ProposalView.vue";
import { useTelemetry } from "@/composables/useTelemetry";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: HomeView },
  { path: "/create", component: CreateProposalView },
  { path: "/proposals/:id", component: ProposalView },
  // { path: "/design", component: DesignView },
];

const router = createRouter({
  history: routerHistory,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 600);
    });
  },
});

const { logPageviews } = useTelemetry();
logPageviews();

export default router;
