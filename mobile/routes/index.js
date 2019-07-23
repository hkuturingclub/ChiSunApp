import { Drawer, Scene } from 'react-native-router-flux';
import { Icon } from 'native-base';
import React from 'react';

import About from '../components/About';
import DefaultProps from '../constants/navigation';
import EventView from '../components/Events/EventView';
import Events from '../components/Events/Events';
import GroupView from '../components/Groups/GroupView';
import Groups from '../components/Groups/Groups';
import Managment from '../components/Management/Management';
import SideBar from '../components/Sidebar/Sidebar';
import theme from '../native-base-theme/variables/commonColor';


export default (
  <Drawer
    key="root"
    drawerIcon={() => <Icon name="ios-menu" style={{ color: theme.brandPrimary, fontSize: 40}} />}
    contentComponent={SideBar}
  >
    <Scene key="about" title="About" {...DefaultProps.navbarProps} component={About} initial />
    <Scene key="events" title="Events" {...DefaultProps.navbarProps} component={Events}  />
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
