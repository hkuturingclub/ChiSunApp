import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, Text,
} from 'native-base';
import moment from 'moment';
import Error from '../Error';
import Spacer from '../Spacer';
import placeholderImage from '../../assets/placeholder.jpg';

const EventView = ({ event }) => {
  // Event not found
  if (!event) return <Error content="Event not found" />;

  return (
    <Container>
      <Content padder>
        <Spacer size={25} />
        <H3>{event.title}</H3>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>Description</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{event.description}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Time</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{moment(event.start).format('LT - Do MMM, dddd')}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Location</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{event.location}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Poster</Text>
          </CardItem>
          <CardItem cardBody>
            <Image
              defaultSource={placeholderImage}
              source={{ uri: event.image }}
              style={{
                flex: 1,
                height: 500,
                width: null,
                resizeMode: 'contain',
              }}
            />
          </CardItem>
        </Card>
        <Spacer size={10} />
      </Content>
    </Container>
  );
};

EventView.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    startDate: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default EventView;
