import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Spacer from '../Spacer';
import collegeLogo from '../../assets/chisun_college.png';

const GROUPS_QUERY = gql`
  query {
    groups {
      id
      name
      image
      link
      description
      contact_name
      contact_number
    }
  }
`;

const GroupListing = ({ groupsQuery }) => {
  const { loading, error, groups } = groupsQuery;

  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error.message} />;

  const keyExtractor = item => item.id;
  const onPress = group => Actions.group({ group });

  return (
    <Container>
      <Content padder>
        <Header
          title="Calling all artists, athletes and innovaters"
          content="From festive parties to sports and from meditation to programming classes, these activities are almost entirely student-run, and exhibit the creativity and livelihood that is quintessential to the Chi Sun style."
        />

        <FlatList
          numColumns={2}
          data={groups}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
                  <Image
                    defaultSource={collegeLogo}
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>{item.name}</Text>
                  <Spacer size={15} />
                  <Button block bordered small onPress={() => onPress(item)}>
                    <Text>View Group</Text>
                  </Button>
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </Card>
          )}
          keyExtractor={keyExtractor}
        />

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

GroupListing.propTypes = {
  groupsQuery: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape(),
    groups: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

export default graphql(GROUPS_QUERY, { name: 'groupsQuery' })(GroupListing);
