/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Employee from "@material-ui/icons/Work";
import Unemployee from "@material-ui/icons/WorkOff";
import Age from "@material-ui/icons/WatchLater";
// import Table from "@material-ui/icons/TableChart";
// core components/views for Admin layout
import unemployee from "views/unemployee/unemployee.js";
import underemployee from "views/underemployee/underemployee.js";
import age from "views/age/age.js";
// import pastdata from "views/pastdata/pastdata.js";

const dashboardRoutes = [
  {
    path: "/unemployment",
    name: "Unemployement Population",
    rtlName: "لوحة القيادة",
    icon: Unemployee,
    component: unemployee,
    layout: "/admin"
  },
  {
    path: "/underemployment",
    name: "Under Employement Population",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Employee,
    component: underemployee,
    layout: "/admin"
  },
  {
    path: "/age",
    name: "Age Structure Population",
    rtlName: "قائمة الجدول",
    icon: Age,
    component: age,
    layout: "/admin"
  },
  // {
  //   path: "/year",
  //   name: "Past Years Data",
  //   rtlName: "قائمة الجدول",
  //   icon: Table,
  //   component: pastdata,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
