import React from 'react';
import {
  Card, CardItem, Body, Text, Thumbnail, Button, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import moment from 'moment';

const EventsList = ({ events, onPress }) => (
  <Card>
    {events.map((event) => {
      const eventStart = moment(event.start);
      return (
        <CardItem key={event.id} bordered>
          <Body>
            <Grid>
              <Col
                size={30}
                style={{
                  justifyContent: 'center',
                }}
              >
                <Thumbnail
                  large
                  source={{ uri: event.image }}
                  defaultSource={require('../../assets/default_event.jpg')}
                />
              </Col>
              <Col size={50}>
                <Row size={30}>
                  <Text style={{ fontWeight: '400' }}>{eventStart.format('dddd, Do MMM')}</Text>
                </Row>
                <Row size={70}>
                  <Text style={{ fontWeight: 'bold' }}>{event.title}</Text>
                </Row>
              </Col>
              <Col
                size={20}
                style={{
                  justifyContent: 'center',
                }}
              >
                <Button onPress={() => onPress(event)}>
                  <Icon name="ios-information-circle-outline" style={{ fontSize: 30 }} />
                </Button>
              </Col>
            </Grid>
          </Body>
        </CardItem>
      );
    })}
  </Card>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default EventsList;
