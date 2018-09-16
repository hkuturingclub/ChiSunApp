import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateSidebar from '../components/TemplateSidebar';

// Routes
import Home from '../components/Home';

import GroupsContainer from '../../containers/Groups';
import GroupsComponent from '../components/Groups';
import GroupViewComponent from '../components/Group';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/groups"
      render={props => (
        <TemplateSidebar>
          <GroupsContainer {...props} Layout={GroupsComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/group/:id"
      render={props => (
        <TemplateSidebar>
          <GroupsContainer {...props} Layout={GroupViewComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar>
          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
