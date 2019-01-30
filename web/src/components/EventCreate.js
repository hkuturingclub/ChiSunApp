import React from 'react';
import { connect } from 'react-redux';
import { Alert,Progress } from 'antd';
import EventCreateForm from './EventCreateForm';
import { reset, addEvent } from '../actions/eventCreate';

class EventCreate extends React.Component {
  componentDidMount = () => {
    const { reset } = this.props;
    reset();
  };

  render() {
    const { addEvent, eventCreate } = this.props;
    const { processing, error, createdEventId } = eventCreate;
    return (
      <div>
        <h1>Create Event</h1>
        {/* Show processing */}
        {processing && <div style={{width:170}}><Progress percent={50} size="small" status="active" /></div>}

        {/* Show success or error messages */}
        {createdEventId && (
          <div><Alert message={"The event has been successfully created with id " + createdEventId + "."} type="success"  /></div>
        )}
        {error && <div><Alert message={error} type="error" /></div>}

        {/* Do not show form when processing */}
        {!processing && <EventCreateForm onSubmit={addEvent} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eventCreate: state.eventCreate || {}
});

const mapDispatchToProps = {
  reset,
  addEvent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventCreate);
