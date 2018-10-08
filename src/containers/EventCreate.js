import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reset, addEvent } from '../actions/eventCreate';

class EventCreate extends React.Component {
  static propTypes = {
    resetState: PropTypes.func.isRequired,
    Layout: PropTypes.func.isRequired,
    eventCreate: PropTypes.shape({
      processing: PropTypes.bool,
      error: PropTypes.string,
      createdEventId: PropTypes.string,
    }).isRequired,
    createEvent: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const { resetState } = this.props;
    resetState();
  };

  render() {
    const { Layout, createEvent, eventCreate } = this.props;
    return (
      <Layout
        createEvent={createEvent}
        processing={eventCreate.processing}
        error={eventCreate.error}
        createdEventId={eventCreate.createdEventId}
      />
    );
  }
}

const mapStateToProps = state => ({
  eventCreate: state.eventCreate || {},
});

const mapDispatchToProps = {
  resetState: reset,
  createEvent: addEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
