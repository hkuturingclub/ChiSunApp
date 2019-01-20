import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Tab, Tabs,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import EventsList from './EventsList';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';

const EVENTS_QUERY = gql`
  query {
    events {
      id
      name
      description
      image
      startDate
      location
    }
  }
`;

const Events = ({ eventsQuery }) => {
  const { loading, error, events } = eventsQuery;

  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error.message} />;

  const onPress = event => Actions.event({ event });
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

Events.propTypes = {
  eventsQuery: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape(),
    events: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

export default graphql(EVENTS_QUERY, { name: 'eventsQuery' })(Events);
