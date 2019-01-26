import { Actions } from 'react-native-router-flux';
import {
  Container, Content, Tab, Tabs,
} from 'native-base';
import { graphql } from 'react-apollo';
import Error from '../Error';
import EventsList from './EventsList';
import Header from '../Header';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import moment from 'moment';

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
  const eventsThisWeek = events.filter(event => moment(event.startDate).isBetween(moment(), weekFromNow, null, []));
  const eventsLater = events.filter(event => moment(event.startDate).isSameOrAfter(weekFromNow));
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
