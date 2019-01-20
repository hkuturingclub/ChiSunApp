import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateSidebar from '../components/TemplateSidebar';

// Routes
import Home from '../components/Home';

import GroupsContainer from '../containers/Groups';
import GroupsComponent from '../components/Groups';
import GroupViewComponent from '../components/Group';

import EventCreateContainer from '../containers/EventCreate';
import EventCreate from '../components/EventCreate';

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
      path="/event/create"
      render={props => (
        <TemplateSidebar>
          <EventCreateContainer {...props} Layout={EventCreate} />
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
          <Error
            {...props}
            title="404"
            content="Sorry, the route you requested does not exist"
          />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
