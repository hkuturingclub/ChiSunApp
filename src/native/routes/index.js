import React from 'react';
import { Drawer, Scene } from 'react-native-router-flux';
import { Icon } from 'native-base';

import theme from '../../../native-base-theme/variables/commonColor';
import DefaultProps from '../constants/navigation';

import SideBar from '../components/Sidebar';

import EventsContainer from '../../containers/Events';
import EventsComponent from '../components/Events/Events';
import EventViewComponent from '../components/Event';

import GroupsContainer from '../../containers/Groups';
import GroupsComponent from '../components/Groups';
import GroupViewComponent from '../components/Group';

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
  </Drawer>
);
