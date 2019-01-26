import React from 'react';
import { Drawer, Scene } from 'react-native-router-flux';
import { Icon } from 'native-base';

import theme from '../native-base-theme/variables/commonColor';
import DefaultProps from '../constants/navigation';

import SideBar from '../components/Sidebar/Sidebar';

import Events from '../components/Events/Events';
import EventView from '../components/Events/EventView';

import Groups from '../components/Groups/Groups';
import GroupView from '../components/Groups/GroupView';

import Managment from '../components/Management/ManagementList';


export default (
  <Drawer
    key="root"
    drawerIcon={() => <Icon name="ios-menu" style={{ color: theme.brandPrimary }} />}
    contentComponent={SideBar}
  >
    <Scene key="events" title="Events" {...DefaultProps.navbarProps} component={Events} initial />
    <Scene
      back
      clone
      key="event"
      title="Event"
      {...DefaultProps.navbarProps}
      component={EventView}
    />
    <Scene key="groups" title="Groups" {...DefaultProps.navbarProps} component={Groups} />
    <Scene
      back
      clone
      key="group"
      title="Group"
      {...DefaultProps.navbarProps}
      component={GroupView}
    />
    <Scene key="management" title="Management" {...DefaultProps.navbarProps} component={Managment} />
  </Drawer>
);
