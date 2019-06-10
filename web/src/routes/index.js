import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { fetchUser } from "../actions/user";
import AppBar from "../components/AppBar";
import AppPrivacyPolicy from "../components/AppPrivacyPolicy";
import EventCreate from "../components/EventCreate";
import EventsManage from "../components/EventsManage/EventsManage";
import GroupCreate from "../components/GroupCreate";
import GroupEdit from "../components/GroupEdit";
import GroupView from "../components/GroupView";
import Groups from "../components/Groups";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

class Index extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <AppBar>
            <Route exact path="/" component={Home} />
            <Route exact path="/groups/create" component={GroupCreate} />
            <Route exact path="/groups" component={Groups} />
            <Route exact path="/group/:id" component={GroupView} />
            <Route exact path="/group/:id/edit" component={GroupEdit} />
            <Route exact path="/events/manage" component={EventsManage} />
            <Route exact path="/event/create" component={EventCreate} />
            <Route
              exact
              path="/privacy-policy/app"
              component={AppPrivacyPolicy}
            />
          </AppBar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(Index);
