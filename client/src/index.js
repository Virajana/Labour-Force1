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
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import "assets/css/material-dashboard-react.css?v=1.8.0";
import Dashboard from "./layouts/dashboard";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path ="/welcome" component ={Dashboard}/>
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/welcome" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
