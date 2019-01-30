import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGroups } from '../actions/groups';
import Error from './Error';
import React from 'react';

class GroupsList extends React.Component {
  componentDidMount = () => this.props.getGroups();


  render = () => {
    const { loading, error, groups } = this.props.groups;

    // Loading
    if (loading) return <div>Loading</div>;

    // Error
    if (error) return <Error content={error} />;

    // Build Cards for Listing
    const cards = groups.map(item => (
      <div key={`${item.id}`}>
        <Link to={`/group/${item.id}`} params={{ group: item }}>
          <img src={item.image} alt={item.name} width={300} />
        </Link>
        <div>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <Link className="btn btn-primary" to={`/group/${item.id}`}>
            View Group <i className="icon-arrow-right" />
          </Link>
        </div>
      </div>
    ));

    // Show Listing
    return (
      <div>
        <h1>Groups</h1>
        <p>
          From festive parties to sports and from meditation to programming
          classes, these activities are almost entirely student-run, and
          exhibit the creativity and livelihood that is quintessential to
          the Chi Sun style.
        </p>
        {cards}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  groups: state.groups
});

const mapDispatchToProps = {
  getGroups
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsList);
