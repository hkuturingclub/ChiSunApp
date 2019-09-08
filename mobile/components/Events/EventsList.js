import {
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Text,
  Thumbnail
} from "native-base";
import { Col, Grid, Row } from "react-native-easy-grid";
import { View } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import moment from "moment";
const placeholderImage = require("../../assets/placeholder.jpg");

const EventsList = ({ events, onPress }) => (
  <Card>
    {events.map(event => {
      const eventStart = moment(event.startDate);
      return (
        <CardItem key={event.id} bordered>
          <Body>
            <Grid
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Col
                style={{
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <Thumbnail
                  large
                  source={{ uri: event.image }}
                  defaultSource={placeholderImage}
                />
                <Col
                  style={{
                    paddingLeft: 10
                  }}
                >
                  <Row size={30}>
                    <Text style={{ fontWeight: "400" }}>
                      {eventStart.format("dddd, Do MMM")}
                    </Text>
                  </Row>
                  <Row size={70}>
                    <Text style={{ fontWeight: "bold" }}>{event.name}</Text>
                  </Row>
                </Col>
              </Col>
              <View
                style={{
                  justifyContent: "center"
                }}
              >
                <Button onPress={() => onPress(event)}>
                  <Icon
                    name="ios-information-circle-outline"
                    style={{ fontSize: 30 }}
                  />
                </Button>
              </View>
            </Grid>
          </Body>
        </CardItem>
      );
    })}
  </Card>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onPress: PropTypes.func.isRequired
};

export default EventsList;
