import React from 'react';
import PropTypes from 'prop-types';
import { Image, Linking } from 'react-native';
import Autolink from 'react-native-autolink';
import {
  Container, Content, Card, CardItem, Body, H3, Right, Text, Button,
} from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';
<<<<<<< HEAD
import moment from 'moment';
=======
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events

const EventView = ({
  error,
  events,
  eventId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Group from all events
  let event = null;
  if (eventId && events) {
    event = events.find(item => parseInt(item.id, 10) === parseInt(eventId, 10));
  }

  // Grouo not found
  if (!event) return <Error content={ErrorMessages.event404} />;

  return (
    <Container>
      <Content padder>
        {/* <Image source={{ uri: event.image }} style={{ height: 100, width: null, flex: 1 }} /> */}

        <Spacer size={25} />
        <H3>
          {event.title}
        </H3>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>About this event</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {event.description}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
<<<<<<< HEAD
                Day: {moment(event.start).format('Do MMM, dddd')}
              </Text>
              <Text>
                Event Start: {moment(event.start).format('LT')}
              </Text>
              <Text>
                Event End: {moment(event.end).format('LT')}
=======
                {event.start}
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {event.location}
              </Text>
            </Body>
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
