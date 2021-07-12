import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Databinding from "../views/Databinding.vue";
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
import dataBindingList3 from "../views/dataBindingList3.vue";
import renderingIf from "../views/renderingIf.vue";
import eventBinding from "../views/eventBinding.vue";
import vending from "../views/vending.vue";
import Restaurant_My from "../views/Restaurant_My.vue";
import Restaurant_T from "../views/Restaurant_T.vue";
import nestedComponent from "../views/nestedComponent.vue";
import nestedComponent2 from "../views/nestedComponent2.vue";
import nestedComponent3 from "../views/nestedComponent3.vue";
import nestedComponent4 from "../views/nestedComponent4.vue";
import nestedComponent5 from "../views/nestedComponent5.vue";
import Parent from "../views/Parent.vue";
import Parent2 from "../views/Parent2.vue";
import SlotUserModalLayout from "../views/SlotUserModalLayout.vue";
import ProviedInject from "../views/ProviedInject.vue";
import watch from "../views/watch.vue";
import computed from "../views/computed.vue";
import StoreAcess from "../views/StoreAcess.vue";
import LoginAcess from "../views/LoginAcess.vue";
import kakaologin from "../views/kakaologin.vue";
import kakaologin02 from "../views/kakaologin02.vue";
import naverlogin from "../views/naverlogin.vue";
import naverlogin02 from "../views/naverlogin02.vue";
import googleLogin from "../views/GoogleLogin.vue";
import getList from "../views/getList.vue";
import person from "../views/person.vue";

const routes = [
  {
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
  {
    path: "/Restaurant_My",
    name: "Restaurant_My",
    component: Restaurant_My,
  },
  {
    path: "/Restaurant_T",
    name: "Restaurant_T",
    component: Restaurant_T,
  },
  {
    path: "/nestedComponent",
    name: "nestedComponent",
    component: nestedComponent,
  },
  {
    path: "/nestedComponent2",
    name: "nestedComponent2",
    component: nestedComponent2,
  },
  {
    path: "/nestedComponent3",
    name: "nestedComponent3",
    component: nestedComponent3,
  },
  {
    path: "/nestedComponent4",
    name: "nestedComponent4",
    component: nestedComponent4,
  },
  {
    path: "/nestedComponent5",
    name: "nestedComponent5",
    component: nestedComponent5,
  },
  {
    path: "/Parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/Parent2",
    name: "Parent2",
    component: Parent2,
  },
  {
    path: "/SlotUserModalLayout",
    name: "SlotUserModalLayout",
    component: SlotUserModalLayout,
  },
  {
    path: "/ProviedInject",
    name: "ProviedInject",
    component: ProviedInject,
  },
  {
    path: "/dataBindingList3",
    name: "dataBindingList3",
    component: dataBindingList3,
  },

  {
    path: "/computed",
    name: "computed",
    component: computed,
  },

  {
    path: "/watch",
    name: "watch",
    component: watch,
  },
  {
    path: "/StoreAcess",
    name: "StoreAcess",
    component: StoreAcess,
  },
  {
    path: "/LoginAcess",
    name: "LoginAcess",
    component: LoginAcess,
  },
  {
    path: "/kakaologin",
    name: "kakaologin",
    component: kakaologin,
  },
  {
    path: "/kakaologin02",
    name: "kakaologin02",
    component: kakaologin02,
  },
  {
    path: "/naverlogin",
    name: "naverlogin",
    component: naverlogin,
  },
  {
    path: "/naverlogin02",
    name: "naverlogin02",
    component: naverlogin02,
  },
  {
    path: "/googleLogin",
    name: "googleLogin",
    component: googleLogin,
  },
  {
    path: "/naverlogin02",
    name: "naverlogin02",
    component: naverlogin02,
  },
  {
    path: "/getList",
    name: "getList",
    component: getList,
  },
  {
    path: "/person",
    name: "person",
    component: person,
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
