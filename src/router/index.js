import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
// import Tables from "../views/Tables.vue";
import Exams from "../views/Exam.vue";
import Question from "../views/Question.vue";
import ViewQuestion from "../views/ViewQuestions";
import EditQuestion from "../views/EditQuestions";
import addExam from "../views/Exam/AddExam.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },

  {
    path: "/add-exam",
    name: "Add Exam",
    component: addExam,
  },
  {
    path: "/exam",
    name: "Exam",
    component: Exams,
  },
  {
    path: "/view-question/",
    name: "View Question",
    component: ViewQuestion,
  },
  {
    path: "/add-question/",
    name: "Add Question",
    component: Question,
  },
  {
    path: "/edit-question/",
    name: "Edit Question",
    component: EditQuestion,
  },
  {
    path: "/dashboard-default",
    name: "Student Feedback",
    component: Dashboard,
  },

  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

// router.beforeEach((to, from, next) => {
//   console.log("Route error is coming.");
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/signin"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");
//   console.log(loggedIn, authRequired);

//   if (authRequired && !loggedIn) {
//     console.log("Not logged in ");
//     next({ name: "Signin" });
//   } else {
//     next();
//   }
// });

export default router;
