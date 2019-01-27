import {
  Container, Content, ListItem
} from 'native-base';
import {
  Dimensions, FlatList, Image, View
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarFooter from './SidebarFooter';
import SidebarItem from './SidebarItem';
import drawerCover from '../../assets/chisun_college.png';
import items from '../../constants/sidebar';

const deviceHeight = Dimensions.get('window').height;
const coverHeight = deviceHeight * 0.3;
const footerHeight = deviceHeight * 0.13;
const itemsHeight = deviceHeight * 0.57;

const styles = {
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    top: -1
  },
  drawerCover: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: coverHeight,
    marginTop: 5,
  },
  itemsContainer: {
    height: itemsHeight
  },
  footerContainer:{
    height: footerHeight,
  },
};

const SideBar = ({ activeItemKey }) => (
  <Container>
    <Content bounces={false} style={styles.sidebar}>
      <Image source={drawerCover} style={styles.drawerCover} />
      <View style={styles.itemsContainer}>
        <ListItem itemDivider />
        <FlatList
          data={items}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => <SidebarItem item={item} activeItemKey={activeItemKey} />}
          extraData={activeItemKey}
        />
      </View>
      <SidebarFooter style={styles.footerContainer} />
    </Content>
  </Container>
);

SideBar.propTypes = {
  activeItemKey: PropTypes.string,
};

export default SideBar;
