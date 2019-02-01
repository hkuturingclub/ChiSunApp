import {
  Content, ListItem
} from 'native-base';
import {
  FlatList, Image, View
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarFooter from './SidebarFooter';
import SidebarItem from './SidebarItem';
import drawerCover from '../../assets/chisun_college.png';
import items from '../../constants/sidebar';

const styles = {
  sidebar: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between'
  },
  drawerCover: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    backgroundColor: '#67c28c',
  }
};

const SideBar = ({ activeItemKey }) => (
  <Content bounces={false} contentContainerStyle={styles.sidebar}>
      <View>
        <Image source={drawerCover} style={styles.drawerCover}/>
        <ListItem itemDivider />
        <FlatList
          data={items}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => <SidebarItem item={item} activeItemKey={activeItemKey} />}
          extraData={activeItemKey}
        />
      </View>
      <SidebarFooter />
    </Content>

);

SideBar.propTypes = {
  activeItemKey: PropTypes.string,
};

export default SideBar;
