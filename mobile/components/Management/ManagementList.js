import React from 'react';
import {
  Card, CardItem, Body, Text, Container, Content, 
} from 'native-base';
import PropTypes from 'prop-types';
import { FlatList, Image } from 'react-native';
import placeholderImage from '../../assets/placeholder.jpg';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Spacer from '../Spacer';

const MANAGEMENT_QUERY = gql`
  query {
    management {
      id
      name
      floors
      position
    }
  }
`;

const ManagementList = ({ managementQuery }) => {
    const { loading, error, management } = managementQuery;
    if (loading) return <Loading />;

    // Error
    if (error) return <Error content={error.message} />;

    return (
    <Container>
    <Content padder>
      <Header
        title="Management Team"
      />
      <FlatList
        numColumns={2}
        data={management}
        renderItem={({ item }) => (
          <Card transparent style={{ paddingHorizontal: 6 }}>
            <CardItem cardBody>
              <Image
                defaultSource={placeholderImage}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </CardItem>
            <CardItem cardBody>
              <Body>
                <Text style={{ fontWeight: '800', alignSelf: 'center' }}>
                  {item.name}
                </Text>
                <Spacer size={5} />
                <Text style={{ alignSelf: 'center' }}>
                  {item.position}
                </Text>
              </Body>
            </CardItem>
          </Card>
        )}
        keyExtractor={(item, index) => item.key}
      />

      <Spacer size={20} />
    </Content>
  </Container>
    );
};

ManagementList.propTypes = {
    managementQuery: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.shape(),
        management: PropTypes.arrayOf(PropTypes.shape()),
      }),
};

export default graphql(MANAGEMENT_QUERY, { name: 'managementQuery' })(ManagementList);
