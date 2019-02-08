import { Col, Row } from "antd"; 
import { EVENTS_PER_ROW } from './EventsManage'; 
import EventCard from './EventCard'; 
import React from 'react'; 

class EventStack extends React.Component{
    render(){
        const { eventRows } = this.props; 
        return(
            eventRows.map((eventRow,index) =>
                <Row gutter={8} key={index}>
                {eventRow.map(event => <Col span={24/EVENTS_PER_ROW} key={event.id}><EventCard event={event} /></Col>)}
                </Row>
            )
        ); 
    }
}
    
export default EventStack; 
