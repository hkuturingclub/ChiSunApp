import { Row, Col } from "antd"; 
import React from 'react'; 
import EventCard from './EventCard'; 
import { EVENTS_PER_ROW } from './EventsManage'; 

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
