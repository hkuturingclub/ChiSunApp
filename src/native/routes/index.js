import React from 'react';
import { Drawer, Scene } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';

import SideBar from '../components/Sidebar';

import GroupsContainer from '../../containers/Groups';
import GroupsComponent from '../components/Groups';
import GroupViewComponent from '../components/Group';

import theme from '../../../native-base-theme/variables/commonColor';

export default (
  <Drawer
    key="root"
    drawerIcon={() => <Icon name="menu" style={{ color: theme.brandPrimary }} />}
    contentComponent={SideBar}
  >
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
  </Drawer>
);
