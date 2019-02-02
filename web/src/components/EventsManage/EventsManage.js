import { Col, Row } from 'antd';
import { chunk } from 'lodash';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/events';
import Error from '../Error';
import EventCard from './EventCard';
import EventsCalendar from './EventsCalendar';
import React from 'react';
import moment from 'moment';

const EVENTS_PER_ROW = 2;

class EventsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: moment(),
      mode: 'year'
    }
    this.onSelect = this.onSelect.bind(this);
    this.onModeChange = this.onModeChange.bind(this);
  }

  componentDidMount() { this.props.getEvents(); }

  onModeChange(date, mode) {
    console.log(mode);
    this.setState({
      currentDate: date,
      mode: mode,
    });
  }

  onSelect(date) {
    this.setState({
      currentDate: date
    });
  }

  render() {
    const { currentDate, mode } = this.state;
    const { loading, error, events } = this.props.events;

    // Loading
    if (loading) return <div>Loading</div>;

    // Error
    if (error) return <Error content={error} />;
    const filter = mode === 'year' ? 'month' : 'day';
    const displayEvents = events.filter(event => moment(event.startDate).isSame(currentDate, filter));
    const eventRows = chunk(displayEvents, EVENTS_PER_ROW);

    // Show Listing
    return (
      <div>
      <h1>Unapproved Events</h1>
      <Row gutter={8}>
        <Col span={12}>
          <EventsCalendar events={events} currentDate={currentDate} onSelect={this.onSelect} onModeChange={this.onModeChange}/>
        </Col>
        <Col span={12}>
          {eventRows.map((eventRow,index) =>
            <Row gutter={8} key={index}>
              {eventRow.map(event => <Col span={24/EVENTS_PER_ROW} key={event.id}><EventCard event={event} /></Col>)}
            </Row>
          )}
        </Col>
      </Row>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = {
  getEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
