import { Card } from 'antd';
import { truncate } from 'lodash';
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

const EventCard = ({event}) => <Card
    cover={<img alt={`${event.title} Poster`} src={event.image} style={styles.img}/>}
    extra = {moment(event.startDate).format("MMMM Do YYYY, h:mm a")}
  >
    <Meta
      title={event.name}
      description={truncate(event.description,{length: 100})}
    />
  </Card>

export default EventCard;
