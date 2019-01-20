import React from 'react';
import PropTypes from 'prop-types';
import { Image, Linking } from 'react-native';
import Autolink from 'react-native-autolink';
import {
  Container, Content, Card, CardItem, Body, H3, Right, Text, Button,
} from 'native-base';
import Error from '../Error';
import Spacer from '../Spacer';
import collegeLogo from '../../assets/chisun_college.png';

const GroupView = ({ group }) => {
  // Group not found
  if (!group) return <Error content="Group not found" />;

  return (
    <Container>
      <Content padder>
        <Image
          defaultSource={collegeLogo}
          source={{ uri: group.image }}
          style={{ height: 100, width: null, flex: 1 }}
        />

        <Spacer size={25} />
        <H3>{group.name}</H3>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>About this group</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{group.description}</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Contact Information</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{group.contact_name}</Text>
            </Body>
            <Right>
              <Text selectable>
                <Autolink text={group.contact_number} />
              </Text>
            </Right>
          </CardItem>
        </Card>
        <Spacer size={10} />
        <Body>
          <Button
            block
            bordered
            onPress={() => {
              Linking.openURL(group.link);
            }}
          >
            <Text>Join</Text>
          </Button>
        </Body>
        <Spacer size={20} />
      </Content>
    </Container>
  );
};

GroupView.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    contact_name: PropTypes.string,
    contact_number: PropTypes.string,
  }),
};

export default GroupView;
