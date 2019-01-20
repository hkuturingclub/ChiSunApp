import React from 'react';
import { Drawer, Scene } from 'react-native-router-flux';
import { Icon } from 'native-base';

import theme from '../native-base-theme/variables/commonColor';
import DefaultProps from '../constants/navigation';

import SideBar from '../components/Sidebar';

import EventsComponent from '../components/Events/Events';
// import EventViewComponent from '../components/Event';

// import GroupsComponent from '../components/Groups';
// import GroupViewComponent from '../components/Group';

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
      component={EventsComponent}
      initial
    />
  </Drawer>
);
