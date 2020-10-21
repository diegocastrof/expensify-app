import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import NotFoundPage from '../pages/NotFoundPage';


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={ history }>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}></PublicRoute>
        <PrivateRoute path="/dashboard" component={DashboardPage}></PrivateRoute>
        <PrivateRoute path="/create" component={AddExpensePage}></PrivateRoute>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}></PrivateRoute>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </Router>
)

export default AppRouter