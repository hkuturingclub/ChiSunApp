import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Card, CardItem, Body, H3, Text,
} from 'native-base';
import moment from 'moment';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

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
    event = events.find(item => item.id === eventId);
  }

  // Grouo not found
  if (!event) return <Error content={ErrorMessages.event404} />;

  return (
    <Container>
      <Content padder>
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
                Day:
                {' '}
                {moment(event.start).format('Do MMM, dddd')}
              </Text>
              <Text>
                Event Start:
                {' '}
                {moment(event.start).format('LT')}
              </Text>
              <Text>
                Event End:
                {' '}
                {moment(event.end).format('LT')}
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
