import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/expense/ExpenseDashboardPage";
import AddExpensePage from "../components/expense/AddExpensePage";
import EditExpensePage from "../components/expense/EditExpensePage";
import HelpPage from "../components/pages/HelpPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import createHistory from "history/createBrowserHistory";
import Header from "../components/pages/Header";
import LoginPage from "../components/pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact={true}
        />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
