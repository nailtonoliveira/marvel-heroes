import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Heroes from '../pages/Heroes';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Heroes} />
    <Route path="/details/:heroId" component={Details} />
  </Switch>
);

export default Routes;
