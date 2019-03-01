import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import ChampionDetail from '../screens/ChampionDetail';
import Champions from '../screens/Champions';
import Home from '../screens/Home';

export default function Router() {
  return (
    <HashRouter>
      <>
        <NavBar />
        <Switch>
          <Route
            path='/champion-detail/:championName'
            component={ChampionDetail}
          />
          <Route path='/champions' component={Champions} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </HashRouter>
  );
}
