import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, RefreshControl, Image
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
import moment from 'moment';

const EventListing = ({
  error,
  loading,
  events,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;
  const onPress = item => Actions.event({ match: { params: { id: String(item.id) } } });
  
  return (
    <Container>
      <Content padder>
        <Header
          title="Upcoming Events"
          content="Events in Chi Sun College in the near future."
        />

        <FlatList
          numColumns={1}
          data={events}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                  <Image source={{ uri: 'https://drive.google.com/uc?id='+item.image }} 
                    style={{ 
                      height: 300, 
                      width: null, 
                      flex: 1,
                      borderRadius: 5,
                      resizeMode: "contain",
                       }} />
                </CardItem>  
                <CardItem cardBody>
                  <Body>
                    <Spacer size={10} />                  
                    <Text style={{ fontWeight: '800', alignSelf: 'center' }}>
                      {item.title}
                    </Text>
                    <Spacer size={15} />
                    <Text style={{ alignSelf: 'center' }}>
                      {moment(item.start).format('Do MMM, dddd')}
                    </Text>
                    <Spacer size={15} />
                    <Button block bordered small onPress={() => onPress(item)}>
                      <Text>View Event</Text>
                    </Button>
                    <Spacer size={5} />
                  </Body>
                </CardItem>
            </Card>
          )}
          keyExtractor={keyExtractor}
          refreshControl={(
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          )}
        />

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

EventListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

EventListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default EventListing;
