// router/index.js or router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/work-samples',
      name: 'work-samples',
      component: () => import('../views/WorkSamplesView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // Education & Credentials Section
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: () => import('../views/CertificationsView.vue')
    },
    {
      path: '/transcripts',
      name: 'transcripts',
      component: () => import('../views/TranscriptsView.vue')
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('../views/AwardsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// import ResumeView from "@/views/ResumeView.vue";
// import ContactView from "@/views/ContactView.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/about",
//       name: "about",
//       component: AboutView,
//     },
//     {
//       path: "/resume",
//       name: "resume",
//       component: ResumeView,
//     },
//     {
//       path: "/resume",
//       name: "resume",
//       component: ResumeView,
//     },
//     {
//       path: "/contact",
//       name: "contact",
//       component: ContactView,
//     },
//   ],
// });

// export default router;
