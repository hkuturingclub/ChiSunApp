import { Route, Switch } from 'react-router-dom';
import React from 'react';

// // Templates
import AppBar from '../components/AppBar';
import AppPrivacyPolicy from '../components/AppPrivacyPolicy';
import Error from '../components/Error';
import EventCreate from '../components/EventCreate';
import EventsManage from '../components/EventsManage/EventsManage';
import GroupView from '../components/GroupView';
import Groups from '../components/Groups';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

const Index = () => (
  <AppBar>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/groups"
          component={Groups}
        />
        <Route
          path="/group/:id"
          component={GroupView}
        />
        <Route
          path="/events/manage"
          component={EventsManage}
        />
        <Route
          path="/event/create"
          component={EventCreate}
        />
        <Route
          path="/privacy-policy/app"
          component={AppPrivacyPolicy}
        />
        <Route
          exact
          path="/signup"
          component={SignUp}
        />
        <Route
          component={props => (
            <Error
              {...props}
              title="404"
              content="Sorry, the route you requested does not exist"
            />
          )}
        />
    </Switch>
  </AppBar>
);

export default Index;
