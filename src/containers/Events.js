import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEvents, setError } from '../actions/events';

class EventListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    events: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchEvents: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchEvents();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchEvents = () => {
    const { fetchEvents, showError } = this.props;
    return fetchEvents()
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }


  render = () => {
    const { Layout, events, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        eventId={id}
        error={events.error}
        loading={events.loading}
        events={events.events}
        reFetch={() => this.fetchGroups()}
      />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events || {},
});

const mapDispatchToProps = {
  fetchEvents: getEvents,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListing);
