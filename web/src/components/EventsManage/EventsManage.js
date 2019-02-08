import { Col, Row, Tabs } from 'antd';
import { chunk } from 'lodash';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/events';
import Error from '../Error';
import EventStack from './EventStack';
import EventsCalendar, { getBadge } from './EventsCalendar'; 
import React from 'react';
import moment from 'moment';  

const TabPane = Tabs.TabPane;

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
   
    const eventsByStatus = {};
    displayEvents.forEach(event=>{
      if (!eventsByStatus[event.status]) {
        eventsByStatus[event.status] = [];
      }
      eventsByStatus[event.status].push(event); 
    });

    let maxStatus; 
    if (displayEvents.length){
      maxStatus = Object.keys(eventsByStatus).reduce((a,b)=>eventsByStatus[a].length > eventsByStatus[b].length ? a : b); 
    }

    // Show Listing
    return (
      <div>
      <h1>Manage Events</h1>
      <Row gutter={8} justify="center" type="flex" >
        <Col span={maxStatus?12:24}>
          <EventsCalendar events={events} currentDate={currentDate} onSelect={this.onSelect} onModeChange={this.onModeChange}/>
        </Col>
        {maxStatus && <Col span={12}> 
             <Tabs defaultActiveKey={maxStatus}>
              {
                Object.keys(eventsByStatus).map((status,index)=> { 
                  const eventRows = chunk(eventsByStatus[status], EVENTS_PER_ROW);
                  return(
                    <TabPane tab={getBadge(status,status)} key={status} > 
                      <EventStack eventRows = { eventRows } /> 
                    </TabPane>
                  )
                })
              }
            </Tabs>
        </Col>}
        {/* <Col span={12}>   
          <Tabs type="card">
            {eventRows.map((eventRow,index,status) => 
              <TabPane tab={status} key={index}>
                <Row gutter={8} key={index}> 
                  {eventRow.map(event=> <Col span={24/EVENTS_PER_ROW} key={event.id}><EventCard event={event} /></Col>)}
                </Row>
              </TabPane>
              )}
          </Tabs>
        </Col>  */}
        {/* <Col span={12}>
          {eventRows.map((eventRow,index) =>
            <Row gutter={8} key={index}>
              {eventRow.map(event => <Col span={24/EVENTS_PER_ROW} key={event.id}><EventCard event={event} /></Col>)}
            </Row>
          )}
        </Col> */}
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

export const EVENTS_PER_ROW = 2; 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
