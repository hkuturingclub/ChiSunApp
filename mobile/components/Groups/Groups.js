import { Container, Content, Tab, Tabs } from 'native-base';
import { graphql } from 'react-apollo';
import Error from '../Error';
import GroupsList from './GroupsList';
import Header from '../Header';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import React from 'react';
import Spacer from '../Spacer';
import gql from 'graphql-tag';

const GROUPS_QUERY = gql`
  query {
    groups {
      id
      name
      category
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

  const uniqueCategories = {};
  groups.forEach(group => uniqueCategories[group.category] = 1);
  const categories = Object.keys(uniqueCategories)

  return (
    <Container>
      <Content padder>
        <Header
          title="Calling all artists, athletes and innovaters"
          content="From festive parties to sports and from meditation to programming classes, these student-run activities exhibit the creativity and livelihood that is quintessential to the Chi Sun style."
        />
        <Tabs>
          {
            categories.map((category, index) => {
              const categoryGroups = groups.filter(group => group.category === category)
              return (
                <Tab heading={category} key={index}>
                  <GroupsList groups={categoryGroups} />
                </Tab>
              )
            })
          }
        </Tabs>
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
