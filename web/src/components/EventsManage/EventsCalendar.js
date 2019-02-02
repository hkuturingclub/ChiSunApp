import { APPROVED, DISAPPROVED, PROCESSING } from '../../constants/events';
import { Badge, Calendar } from 'antd';
import React from 'react';
import moment from 'moment';

const styles = {
  events: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
};

const badgeStatus = {};
badgeStatus[DISAPPROVED] = 'error';
badgeStatus[PROCESSING] = 'processing';
badgeStatus[APPROVED] = 'success';

export const getBadge = (status, text) => <Badge status={badgeStatus[status] || "default"} text={text} />

class EventsCalendar extends React.Component {
  getList(items, showTotal) {
    return items.length ?
      <div>
        {showTotal && `(${items.length}) Events`}
        <ul style={styles.events}>
        {
          items.map(item => (
            <li key={item.name}>
              {getBadge(item.status, item.name)}
            </li>
          ))
        }
        </ul>
      </div> : null;
  }

  dateCellRender(date, events) {
    const dayEvents = events.filter(event => moment(event.startDate).isSame(date, 'day'));
    return this.getList(dayEvents);
  }

  monthCellRender(date, events) {
    const monthEvents = events.filter(event => moment(event.startDate).isSame(date, 'month'));
    return this.getList(monthEvents, true);
  }

  render() {
    const { events, currentDate, onSelect, onModeChange} = this.props;
    return (
      <Calendar
        mode="year"
        dateCellRender={(date) => this.dateCellRender(date, events)}
        monthCellRender={(date) => this.monthCellRender(date, events)}
        onSelect={onSelect}
        onChange={onSelect}
        value={currentDate}
        onPanelChange={onModeChange}
      />
    );
  };
}

export default EventsCalendar;
