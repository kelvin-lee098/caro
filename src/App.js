import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import AppLayout from './scenes/AppLayout';
import router from './constants/router';

function App() {
  return (
    <Switch>
      <Route path={router.HOME} component={AppLayout} />
    </Switch>
  );
}

export default withRouter(App)
