import React from 'react';
import { Container, Content } from 'native-base';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import ManagementList from './ManagementList';
import { TUTOR } from '../../constants/managementRanks';

const MANAGEMENT_QUERY = gql`
  query {
    management {
      id
      name
      floors
      position
      image
      email
      rank
    }
  }
`;

const Management = ({ managementQuery }) => {
    const { loading, error, management } = managementQuery;
    
    if (loading) return <Loading />;

    // Error
    if (error) return <Error content={error.message} />;

    management.forEach(item=>item.floors.sort((c,d)=>c-d));
    management.sort((a,b) => {
      if (a.rank == TUTOR && b.rank == TUTOR ) {
        return b.floors[0]-a.floors[0];
      }
      return a.rank-b.rank;
    });

    seniorTeam = management.filter(item => item.rank < TUTOR);
    tutorialTeam = management.filter(item => item.rank === TUTOR);

    return (
    <Container>
    <Content padder>
      <Header
        title='Management Team'
        align='center'
      />
      <ManagementList items={seniorTeam} numColumns={1} seniorTeam />
      <Header 
        title='Tutorial Team'
        align='center'
      />
      <ManagementList items={tutorialTeam} numColumns={2} />
    </Content>
  </Container>
    );
};

Management.propTypes = {
    managementQuery: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.shape(),
        management: PropTypes.arrayOf(PropTypes.shape()),
      }),
};

export default graphql(MANAGEMENT_QUERY, { name: 'managementQuery' })(Management);