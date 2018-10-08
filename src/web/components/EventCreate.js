import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Progress } from 'reactstrap';
import EventCreateForm from './EventCreateForm';

const EventCreate = ({
  createEvent, processing, error, createdEventId,
}) => (
  <div>
    <h1>Create Event</h1>
    {/* Show processing */}
    {processing && <Progress animated color="success" value={50} />}

    {/* Show success or error messages */}
    {createdEventId && (
      <Alert color="success">{`The event has been successfully created with id ${createdEventId}.`}</Alert>
    )}
    {error && <Alert color="danger">{error}</Alert>}

    {/* Do not show form when processing */}
    {!processing && <EventCreateForm onSubmit={createEvent} />}
  </div>
);

EventCreate.propTypes = {
  createEvent: PropTypes.func.isRequired,
  processing: PropTypes.bool,
  error: PropTypes.string,
  createdEventId: PropTypes.string,
};

export default EventCreate;
