import { Route, Switch } from 'react-router-dom';
import React from 'react';

// // Templates
import AppBar from '../components/AppBar';
import AppPrivacyPolicy from '../components/AppPrivacyPolicy';
import Error from '../components/Error';
import EventCreate from '../components/EventCreate';
import GroupView from '../components/GroupView';
import Groups from '../components/Groups';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

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
      path="/signup"
      component={props => (
        <AppBar>
          <SignUp {...props} />
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
      path="/group/:id"
      component={props => (
        <AppBar>
          <GroupView {...props} />
        </AppBar>
      )}

    />

    <Route
      path="/event/create"
      component={props => (
        <AppBar>
          <EventCreate {...props} />
        </AppBar>
      )}
    />

    <Route
      path="/privacy-policy/app"
      component={props => (
        <AppBar>
          <AppPrivacyPolicy {...props} />
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



  </Switch>
);

export default Index;
