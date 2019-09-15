import {Alert, Button, Card} from 'antd';
import {connect} from "react-redux";
import { truncate } from 'lodash';
import {updateEventStatus} from "../../actions/events";
import React from 'react';
import moment from 'moment';
const { Meta } = Card;
const styles = {
  img: {
    maxHeight: 200, 
    height: "auto", 
    width: "auto", 
    margin: "auto"
  }
}

const EventCard = ({event, updateEventStatus, events,user}) =>{

  return(
    <>
  <Card
    cover={<img alt={`${event.title} Poster`} src={event.image} style={styles.img}/>}
    extra = {moment(event.startDate).format("MMMM Do YYYY, h:mm a")}
    actions = { (event.status === 'processing'&& [
      <Button type="primary"  icon="check-circle" onClick={() => {updateEventStatus(event.id,'approved');}} disabled={!user.user} >Approve</Button>,
      <Button type="primary"  icon="close-circle" onClick={() => {updateEventStatus(event.id,'disapproved');}} disabled={!user.user}>Disapprove</Button>
    ]) }
  >
    <Meta
      title={event.name}
      description={truncate(event.description,{length: 100})}
    />
    {!!events.updateError && events.updateId === event.id && <Alert
      style={{marginTop:'10px'}}
      message={events.updateError}
      type="error"
    />
    }
  </Card>
    </>)
}

const mapStateToProps = state => ({
  events: state.events || {},
  user: state.user,
});

const mapDispatchToProps = {
  updateEventStatus
};
export default connect(mapStateToProps,mapDispatchToProps)(EventCard);
