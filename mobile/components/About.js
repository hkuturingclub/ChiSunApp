import { Container, Content } from 'native-base';
import { Image, Text } from 'react-native';
import React,{ Component } from 'react';

var DomParser = require('react-native-html-parser').DOMParser;
class About extends Component {
    componentDidMount() {
        fetch('http://www.chisuncollege.hku.hk/the-college/', {
            method: 'GET'
            //Request Type 
        })
        .then((response) => {
            //Success
            let doc = new DomParser().parseFromString(response._bodyText, 'text/html');
            let Wrapper = doc.getElementsByClassName('wpb_wrapper')[2];
            let img = Wrapper.getElementsByTagName('img')[0].getAttribute('src');
            let aboutText = Wrapper.getElementsByTagName('p');
            let ChiSunAbout = '';
            for (let i = 0; i < aboutText.length; i++) {
              ChiSunAbout += aboutText[i].textContent + "\n\n";
            }
            this.setState({
                text: ChiSunAbout,
                // text: Wrapper.textContent,
                image: img
            });
        })
        .catch((error) => {
            //Error 
            console.error(error);
        });

    }
    state = {
      text: "Loading...",
      image: undefined
    };
    render(){
        
        return(
            <Container>
                <Content>
                    < Image source = {
                      {
                        uri: this.state.image
                      }
                    }
                    style = {
                      {
                        resizeMode: 'contain',
                        width: 'auto',
                        height: '30%',
                        margin: 5,
                        padding: 0
                        // height: 'auto'
                      }
                    }
                    />
                        <Text style={{margin: 10}}>{this.state.text}</Text>
                </Content>
            </Container>
        );
    }
}

export default About;