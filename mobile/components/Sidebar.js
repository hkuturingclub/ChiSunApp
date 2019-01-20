import React from 'react';
import {
  Image, Platform, Dimensions, FlatList,
} from 'react-native';
import {
  Content, Text, ListItem, Icon, Container, Left,
} from 'native-base';
import PropTypes from 'prop-types';
import { WebBrowser } from 'expo';
import { Actions } from 'react-native-router-flux';
import items from '../constants/sidebar';
import drawerCover from '../assets/chisun_college.png';

const deviceHeight = Dimensions.get('window').height;

const styles = {
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerCover: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: deviceHeight / 3.5,
    marginTop: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: Platform.OS === 'android' ? 7 : 5,
  },
  sidebarIcon: {
    fontSize: 21,
    color: '#fff',
    lineHeight: Platform.OS === 'android' ? 21 : 25,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  text: {
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    fontSize: 16,
    marginLeft: 20,
  },
};

const SideBar = ({ activeItemKey }) => (
  <Container>
    <Content bounces={false} style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
      <Image source={drawerCover} style={styles.drawerCover} />
      <ListItem itemDivider />
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <ListItem
            button
            selected={activeItemKey === item.route}
            onPress={() => {
              if (item.type && item.type === 'link') {
                WebBrowser.openBrowserAsync(item.link);
              } else {
                Actions[item.route].call();
              }
            }}
          >
            <Left>
              <Icon active name={item.icon} style={{ color: '#777', fontSize: 26, width: 30 }} />
              <Text style={styles.text}>{item.name}</Text>
            </Left>
          </ListItem>
        )}
        extraData={activeItemKey}
      />
    </Content>
  </Container>
);

SideBar.propTypes = {
  activeItemKey: PropTypes.string,
};

export default SideBar;
