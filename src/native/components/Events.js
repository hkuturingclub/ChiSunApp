import React from 'react';
import PropTypes from 'prop-types';
import {
<<<<<<< HEAD
  FlatList, RefreshControl, Image
=======
  FlatList, RefreshControl,
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Error from './Error';
import Header from './Header';
import Spacer from './Spacer';
<<<<<<< HEAD
import moment from 'moment';
=======
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events

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
<<<<<<< HEAD
  const onPress = item => Actions.event({ match: { params: { id: String(item.id) } } });
  
=======

  const onPress = item => Actions.event({ match: { params: { id: String(item.id) } } });

>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
  return (
    <Container>
      <Content padder>
        <Header
          title="Upcoming Events"
<<<<<<< HEAD
          content="Events in Chi Sun College in the near future."
        />

        <FlatList
          numColumns={1}
=======
          content="Events in Chi Sun Collge in the near future."
        />

        <FlatList
          numColumns={2}
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
          data={events}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
<<<<<<< HEAD
                  <Image source={{ uri: item.image }} 
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
=======
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>
                    {item.title}
                  </Text>
                  <Spacer size={15} />
                  <Text>
                    {item.start}
                  </Text>
                  <Button
                    block
                    bordered
                    small
                    onPress={() => onPress(item)}
                  >
                    <Text>View Event</Text>
                  </Button>
                  <Spacer size={5} />
                </Body>
              </CardItem>
>>>>>>> 2ae2e9e... mobile-app: displays upcoming events
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
