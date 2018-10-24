// React
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; // Only use Route for public routes...
import PrivateRoute from "./PrivateRoute"; // HOC of Route.
import PublicRoute from "./PublicRoute"; // HOC of Route.

// History
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

// Components
import DashboardPage from "../components/DashboardPage";
import FourOhFour from "../components/FourOhFour";
import Login from "../components/Login";

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute exact={true} path="/dashboard" component={DashboardPage} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;