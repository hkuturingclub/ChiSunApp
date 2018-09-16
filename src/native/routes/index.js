import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import GroupsContainer from '../../containers/Groups';
import GroupsComponent from '../components/Groups';
import GroupViewComponent from '../components/Group';

import AboutComponent from '../components/About';

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
          <Scene key="home" component={AboutComponent} />
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

    <Scene
      back
      clone
      key="group"
      title="GROUP"
      {...DefaultProps.navbarProps}
      component={GroupsContainer}
      Layout={GroupViewComponent}
    />
  </Stack>
);

export default Index;
