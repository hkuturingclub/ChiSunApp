import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, Text,
} from 'native-base';
import moment from 'moment';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

const EventView = ({ error, events, eventId }) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Group from all events
  let event = null;
  if (eventId && events) {
    event = events.find(item => item.id === eventId);
  }

  // Grouo not found
  if (!event) return <Error content={ErrorMessages.event404} />;

  return (
    <Container>
      <Content padder>
        <Spacer size={25} />
        <H3>{event.title}</H3>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>Description</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{event.description}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Time</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{moment(event.start).format('LT - Do MMM, dddd')}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Location</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{event.location}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Poster</Text>
          </CardItem>
          <CardItem cardBody>
            <Image
              defaultSource={require('../../images/default_event.jpg')}
              source={{ uri: event.image }}
              style={{
                flex: 1,
                height: 500,
                width: null,
                resizeMode: 'contain',
              }}
            />
          </CardItem>
        </Card>
        <Spacer size={10} />
      </Content>
    </Container>
  );
};

EventView.propTypes = {
  error: PropTypes.string,
  eventId: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

EventView.defaultProps = {
  error: null,
};

export default EventView;
