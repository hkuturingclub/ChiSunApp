import { Actions } from 'react-native-router-flux';
import {
    Icon, Left, ListItem
} from 'native-base';
import { Platform, Text } from 'react-native';
import { WebBrowser } from 'expo';
import React from 'react';

const styles = {
    text: {
        fontWeight: Platform.OS === 'ios' ? '500' : '400',
        fontSize: 16,
        marginLeft: 20,
    },
    itemIcon: {
        color: '#777',
        fontSize: 26,
        width: 30
    }
}

const SidebarItem = ({item, activeItemKey}) => (
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
        <Icon active name={item.icon} style={styles.itemIcon} />
        <Text style={styles.text}>{item.name}</Text>
      </Left>
    </ListItem>
)

export default SidebarItem;
