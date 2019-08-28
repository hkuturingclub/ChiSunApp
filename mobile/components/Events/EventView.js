import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  H3,
  Text
} from "native-base";
import { Image } from "react-native";
import Autolink from "react-native-autolink";
import Error from "../Error";
import PropTypes from "prop-types";
import React from "react";
import Spacer from "../Spacer";
import moment from "moment";
const placeholderImage = require("../../assets/placeholder.jpg");

const EventView = ({ event }) => {
  // Event not found
  if (!event) return <Error content="Event not found" />;

  return (
    <Container>
      <Content padder>
        <Spacer size={15} />
        <H3>{event.name}</H3>
        <Spacer size={15} />
        <Card>
          <CardItem header bordered>
            <Text>Description</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Autolink text={event.description} />
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Time</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{moment(event.startDate).format("LT - Do MMM, dddd")}</Text>
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
                resizeMode: "contain"
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
    location: PropTypes.string
  })
};

export default EventView;
