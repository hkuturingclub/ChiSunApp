import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGroups, setError } from '../actions/groups';

class GroupListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    groups: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      groups: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchGroups: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    match: null,
  };

  componentDidMount = () => this.fetchGroups();

  /**
   * Fetch Data from API, saving to Redux
   */
  fetchGroups = () => {
    const { fetchGroups, showError } = this.props;
    return fetchGroups().catch((err) => {
      console.log(`Error: ${err}`);
      return showError(err);
    });
  };

  render = () => {
    const { Layout, groups, match } = this.props;
    const id = match && match.params && match.params.id ? match.params.id : null;

    return (
      <Layout
        groupId={id}
        error={groups.error}
        loading={groups.loading}
        groups={groups.groups}
        reFetch={() => this.fetchGroups()}
      />
    );
  };
}

const mapStateToProps = state => ({
  groups: state.groups || {},
});

const mapDispatchToProps = {
  fetchGroups: getGroups,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupListing);
