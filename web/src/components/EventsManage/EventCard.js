import { Card, Icon } from 'antd';
import { truncate } from 'lodash';
import React from 'react';
const { Meta } = Card;

const EventCard = ({event}) => <Card
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      title={event.name}
      description={truncate(event.description,{length: 100})}
    />
  </Card>

export default EventCard;
