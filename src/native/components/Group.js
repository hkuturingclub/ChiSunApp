import React from 'react';
import PropTypes from 'prop-types';
import { Image, Linking } from 'react-native';
import Autolink from 'react-native-autolink';
import {
  Container, Content, Card, CardItem, Body, H3, Right, Text, Button,
} from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

const GroupView = ({
  error,
  groups,
  groupId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Group from all groups
  let group = null;
  if (groupId && groups) {
    group = groups.find(item => parseInt(item.id, 10) === parseInt(groupId, 10));
  }

  // Grouo not found
  if (!group) return <Error content={ErrorMessages.group404} />;

  return (
    <Container>
      <Content padder>
        <Image source={{ uri: group.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>
          {group.name}
        </H3>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>
              About this group
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {group.description}
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              Contact Information
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {group.contactName}
              </Text>
            </Body>
            <Right>
              <Text selectable>
                <Autolink text={group.contactNumber} />
              </Text>
            </Right>
          </CardItem>
        </Card>
        <Spacer size={10} />
        <Body>
          <Button block bordered onPress={() => { Linking.openURL(group.link); }}>
            <Text>
              Join
            </Text>
          </Button>
        </Body>
        <Spacer size={20} />
      </Content>
    </Container>
  );
};

GroupView.propTypes = {
  error: PropTypes.string,
  groupId: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GroupView.defaultProps = {
  error: null,
};

export default GroupView;
