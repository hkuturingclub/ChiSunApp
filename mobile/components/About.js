import { Container, Content } from "native-base";
import { Dimensions, Image, Text, View } from "react-native";
import React, { Component } from "react";
import assets from "../constants/assets";

var DomParser = require("react-native-html-parser").DOMParser;
class About extends Component {
  state = {
    text: "Loading..."
  };
  componentDidMount() {
    fetch("http://www.chisuncollege.hku.hk/the-college/")
      .then(response => {
        let doc = new DomParser().parseFromString(
          response._bodyText,
          "text/html"
        );
        let Wrapper = doc.getElementsByClassName("wpb_wrapper")[2];
        let aboutText = Wrapper.getElementsByTagName("p");
        let ChiSunAbout = "";
        for (let i = 0; i < aboutText.length; i++) {
          if (aboutText[i].textContent !== "") {
            ChiSunAbout += aboutText[i].textContent + "\n\n";
          }
        }
        this.setState({
          text: ChiSunAbout
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          text: assets.collegeAbout
        });
      });
  }
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
