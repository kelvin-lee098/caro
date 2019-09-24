import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import PlayScreen from '../PlayScreen/index.js'
import Dashboard from '../Dashboard/index'
import ROUTER from '../../constants/router'

const AppLayout = () => (
  <Switch>
    <Route path={ROUTER.HOME} component={Home} exact />
    <Route path={ROUTER.PLAYSCREEN.INDEX} component={PlayScreen} />
    <Route path={ROUTER.DASHBOARD.INDEX} component={Dashboard} />
  </Switch>
)

export default AppLayout
