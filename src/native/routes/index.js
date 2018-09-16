import React from 'react';
import { Drawer, Scene } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';

import SideBar from '../components/Sidebar';

import EventsContainer from '../../containers/Events';
import EventsComponent from '../components/Events';
import EventViewComponent from '../components/Event';

import GroupsContainer from '../../containers/Groups';
import GroupsComponent from '../components/Groups';
import GroupViewComponent from '../components/Group';

import EventsContainer from '../../containers/Events';
import EventsComponent from '../components/Events';
import EventViewComponent from '../components/Event';

// import AboutComponent from '../components/About';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName.toUpperCase()}
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={EventsContainer} Layout={EventsComponent} />
        </Stack>

        <Stack
          key="groups"
          title="Groups"
          icon={() => <Icon name="book" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="groups" component={GroupsContainer} Layout={GroupsComponent} />
        </Stack>
      </Tabs>
    </Scene>

export default (
  <Drawer
    key="root"
    drawerIcon={() => <Icon name="menu" style={{ color: theme.brandPrimary }} />}
    contentComponent={SideBar}
  >
  <Scene
      key="events"
      title="Events"
      {...DefaultProps.navbarProps}
      component={EventsContainer}
      Layout={EventsComponent}
      initial
    />
    <Scene
      back
      clone
      key="event"
      title="Event"
      {...DefaultProps.navbarProps}
      component={EventsContainer}
      Layout={EventViewComponent}
    />
    <Scene
      key="groups"
      title="Groups"
      {...DefaultProps.navbarProps}
      component={GroupsContainer}
      Layout={GroupsComponent}
      initial
    />
    <Scene
      back
      clone
      key="group"
      title="Group"
      {...DefaultProps.navbarProps}
      component={GroupsContainer}
      Layout={GroupViewComponent}
    />

    <Scene
      back
      clone
      key="event"
      title="EVENT"
      {...DefaultProps.navbarProps}
      component={EventsContainer}
      Layout={EventViewComponent}
    />
  </Stack>
);
