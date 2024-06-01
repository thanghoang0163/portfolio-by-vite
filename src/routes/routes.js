import React from "react";

// Main Pages
import HomePage from "~/pages/home/page";

// Contact
const Contact = React.lazy(() => import("~/pages/contact/page"));

// Resume
const Resume = React.lazy(() => import("~/pages/resume/page"));

// Work
const Work = React.lazy(() => import("~/pages/work/page"));

const publicRoutes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/resume',
    component: Resume,
  },
  {
    path: '/work',
    component: Work,
  },
  
];

const protectedRoutes = [];

export { publicRoutes, protectedRoutes };
