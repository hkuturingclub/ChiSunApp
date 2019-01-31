import { Actions } from 'react-native-router-flux';
import {
  Body, Button, Card, CardItem, Text,
} from 'native-base';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Spacer from '../Spacer';
import collegeLogo from '../../assets/chisun_college.png';

const GroupsList = ({ groups }) => <FlatList
  numColumns={2}
  data={groups}
  renderItem={({ item }) => (
    <Card transparent style={{ paddingHorizontal: 6 }}>
      <CardItem cardBody>
        <TouchableOpacity onPress={() => Actions.group({ group: item })} style={{ flex: 1 }}>
          <Image
            defaultSource={collegeLogo}
            source={{ uri: item.image }}
            style={{
              height: 100,
              width: null,
              flex: 1,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </CardItem>
      <CardItem cardBody>
        <Body>
          <Spacer size={10} />
          <Text style={{ fontWeight: '800' }}>{item.name}</Text>
          <Spacer size={15} />
          <Button block bordered small onPress={() => Actions.group({ group: item })}>
            <Text>View Group</Text>
          </Button>
          <Spacer size={5} />
        </Body>
      </CardItem>
    </Card>
  )}
  keyExtractor={(item) => item.id}
  scrollEnabled={false}
/>

GroupsList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GroupsList;
