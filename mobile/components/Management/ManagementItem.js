import { Button, Card, Icon, Text, Thumbnail } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Linking } from 'react-native';
import React from 'react';
const placeholderImage = require('../../assets/chisun_college.png');

const getFloorText = (floors) => {
  const first = floors[0];
  const last = floors[floors.length - 1];
  return `${first} - ${last}F`;
}

const styles = {
  row: {
    justifyContent: 'center',
    padding: 3
  }
}

const ManagementItem = ({floors, email, name, image, position, seniorTeam}) => (
  <Card >
    <Grid style={{ padding: 5}}>
      <Row style={{ padding: 5 }}>
        <Col
          size={30}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Thumbnail
            medium={!seniorTeam}
            large={seniorTeam}
            source={{uri:image}}
            defaultSource={placeholderImage}
          />
        </Col>
        <Col size={70}>
          <Row style={styles.row} >
            <Text alignSelf='center' style={{textAlign:'center', fontWeight:'bold'}}>
              {name}
            </Text>
          </Row>
          <Row style={styles.row}>
            <Text
              alignSelf='center'
              style={{textAlign:'center'}}
            >
              {!seniorTeam && getFloorText(floors)}
              {seniorTeam && position}
            </Text>
          </Row>
          <Row
            style={styles.row}
            onPress={() => Linking.openURL(`mailto:${email}`).catch((err) => console.log(err))}
          >
            <Button onPress={() => Linking.openURL(`mailto:${email}`).catch((err) => console.log(err))}>
              <Icon
                name='email'
                type='MaterialIcons'
                style={{ fontSize: 20 }}
              />
            </Button>
        </Row>
        </Col>
      </Row>
    </Grid>
  </Card>
)

export default ManagementItem;
