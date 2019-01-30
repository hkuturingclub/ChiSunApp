import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Error from './Error';

import { getGroups, setError } from '../actions/groups';

class GroupView extends React.Component {
  // componentDidMount = () => this.fetchGroups();

  /**
   * Fetch Data from API, saving to Redux
   */
  // fetchGroups = () => {
  //   const { fetchGroups, showError } = this.props;
  //   return fetchGroups().catch(err => {
  //     console.log(`Error: ${err}`);
  //     return showError(err);
  //   });
  // };

  render() {
    const { loading, error, groups } = this.props.groups;

    // Loading
    if (loading) return <div> Loading... </div>;

    // Error
    if (error) return <Error content={error} />;

    const { id } = this.props.match.params;
    // Get this Group from all groups
    let group = null;
    if (id && groups) {
      group = groups.find(item => item.id === id);
    }

    // Group not found
    if (!group) return <Error content={'Group not found'} />;

    return (
      <div>
            <h1>{group.name}</h1>
            <div>
              <div>About this group</div>
              <div>
                <div>{group.description}</div>
              </div>
            </div>
            <div>
              <div>Contact Information</div>
              <div>
                <p>
                  {group.contactName}
                  <br />
                  {group.contactNumber}
                </p>
              </div>
            </div>
            <Link className="btn btn-secondary" to="/groups">
              <i className="icon-arrow-left" />
              {' Back'}
            </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups || {}
});

const mapDispatchToProps = {
  getGroups,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupView);
