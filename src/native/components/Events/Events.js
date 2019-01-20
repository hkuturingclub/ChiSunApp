import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Tab, Tabs,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import EventsList from './EventsList';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';

const EventListing = ({ error, loading, events }) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const onPress = item => Actions.event({ match: { params: { id: String(item.id) } } });
  const weekFromNow = moment().add(7, 'days');
  const eventsThisWeek = events.filter(event => moment(event.start).isSameOrBefore(weekFromNow));
  const eventsLater = events.filter(event => !moment(event.start).isSameOrBefore(weekFromNow));
  return (
    <Container>
      <Content padder>
        <Header hasTabs title="Upcoming Events" />

        <Tabs>
          <Tab heading={`This Week (${eventsThisWeek.length})`}>
            <EventsList events={eventsThisWeek} onPress={onPress} />
          </Tab>
          <Tab heading={`Later (${eventsLater.length})`}>
            <EventsList events={eventsLater} onPress={onPress} />
          </Tab>
        </Tabs>
      </Content>
    </Container>
  );
};

EventListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

EventListing.defaultProps = {
  error: null,
};

export default EventListing;
