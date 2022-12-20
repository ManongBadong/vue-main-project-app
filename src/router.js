import { createRouter, createWebHistory } from 'vue-router';

import AllCoaches from './pages/AllCoaches.vue';
import AllRequests from './pages/AllRequests.vue';
import RegisterCoach from './pages/RegisterCoach.vue';
import CoachDetails from './pages/CoachDetails.vue';
import CoachRequest from './pages/CoachRequest.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: AllCoaches },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        {
          path: 'contact',
          component: CoachRequest,
        },
      ],
    },
    { path: '/requests', component: AllRequests },
    { path: '/register-coach', component: RegisterCoach },
  ],
});

export default router;
