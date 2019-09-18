import { Container, Content } from "native-base";
import { Dimensions, Image, Text } from "react-native";
import React, { Component } from "react";
import assets from "../constants/assets";

class About extends Component {
  state = {
    text: assets.collegeAbout
  };
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={assets.chiSunLibrary}
            style={{
              height: 250,
              width: Dimensions.get("window").width
            }}
            resizeMode={"cover"}
          />
          <Text style={{ margin: 10 }}>{this.state.text}</Text>
        </Content>
      </Container>
    );
  }
}

export default About;
