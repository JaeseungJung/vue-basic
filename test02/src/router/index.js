import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Databinding from "../views/Databinding.vue";
// import DatabindingHTML from "../views/DatabindingHTML.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import dataBindingTextArea from "../views/dataBindingTextArea.vue";
import dataBindingSelect from "../views/dataBindingSelect.vue";
import dataBindingCheckbox from "../views/dataBindingCheckbox.vue";
import dataBindingRadio from "../views/dataBindingRadio.vue";
import dataBindingAttribute from "../views/dataBindingAttribute.vue";
import DataBindingHTML from "../views/DataBindingHTML.vue";
import dataBindingButton from "../views/dataBindingButton.vue";
import dataBindingClass from "../views/dataBindingClass.vue";
import dataBindingClass2 from "../views/dataBindingClass2.vue";
import dataBindingStyle from "../views/dataBindingStyle.vue";
import dataBindingList from "../views/dataBindingList.vue";
import dataBindingList2 from "../views/dataBindingList2.vue";
import renderingIf from "../views/renderingIf.vue";
import eventBinding from "../views/eventBinding.vue";
import vending from "../views/vending.vue";



const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/databinding",
    name: "Databinding",
    component: Databinding,
  },

  {
    path: "/DataBindingHTML",
    name: "DataBindingHTML",
    component: DataBindingHTML,
  },

  {
    path: "/DataBindingInputText",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },

  {
    path: "/dataBindingTextArea",
    name: "dataBindingTextArea",
    component: dataBindingTextArea,
  },

  {
    path: "/dataBindingSelect",
    name: "dataBindingSelect",
    component: dataBindingSelect,
  },

  {
    path: "/dataBindingCheckbox",
    name: "dataBindingCheckbox",
    component: dataBindingCheckbox,
  },

  {
    path: "/dataBindingRadio",
    name: "dataBindingRadio",
    component: dataBindingRadio,
  },

  {
    path: "/dataBindingAttribute",
    name: "dataBindingAttribute",
    component: dataBindingAttribute,
  },

  {
    path: "/dataBindingButton",
    name: "dataBindingButton",
    component: dataBindingButton,
  },


  {
    path: "/dataBindingClass",
    name: "dataBindingClass",
    component: dataBindingClass,
  },

  {
    path: "/dataBindingClass2",
    name: "dataBindingClass2",
    component: dataBindingClass,
  },

  {
    path: "/dataBindingStyle",
    name: "dataBindingStyle",
    component: dataBindingStyle,
  },
  {
    path: "/dataBindingList",
    name: "dataBindingList",
    component: dataBindingList,
  },
  {
    path: "/dataBindingList2",
    name: "dataBindingList2",
    component: dataBindingList2,
  },
  {
    path: "/renderingIf",
    name: "renderingIf",
    component: renderingIf,
  },
  {
    path: "/eventBinding",
    name: "eventBinding",
    component: eventBinding,
  },
  {
    path: "/vending",
    name: "vending",
    component: vending,
  },



  //   {
  //     path: "/about",
  //     name: "About",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import( /* webpackChunkName: "about" */ "../views/About.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;