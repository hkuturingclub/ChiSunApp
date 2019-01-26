import React from 'react';
import { Switch, Route } from 'react-router-dom';

// // Templates
import AppBar from '../components/AppBar';

import Home from '../components/Home';
import Groups from '../components/Groups'; 
// import GroupsList from '../components/GroupsList';
// import GroupView from '../components/GroupView';

// import EventCreate from '../components/EventCreate';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={props => (
          <AppBar> 
              <Home {...props} /> 
          </AppBar>
      )}
    />
     <Route
      exact
      path="/groups"
      component={props => (
          <AppBar> 
              <Groups {...props} /> 
          </AppBar>
      )}
    />
    <Route
      component={props => (
        <AppBar>
          <Error
            {...props}
            title="404"
            content="Sorry, the route you requested does not exist"
          />    
        </AppBar>
      )}
    /> 
    
    {/*
    <Route
      path="/event/create"
      component={props => (
        <AppBar>
          <EventCreate {...props} />
        </AppBar>
      )}
    />
    <Route
      path="/groups"
      component={props => (
        <AppBar>
          <GroupsList {...props} />
        </AppBar>
      )}
    />
    <Route
      path="/group/:id"
      component={props => (
        <AppBar>
          <GroupView {...props} />
        </AppBar>
      )}
    />
    
    <Route
      component={props => (
        <AppBar>
          <Error
            {...props}
            title="404"
            content="Sorry, the route you requested does not exist"
          />
        </AppBar>
      )}
    /> */}
  </Switch>
);

export default Index;
