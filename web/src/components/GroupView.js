import { Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import Error from "./Error";

import { getGroups } from "../actions/groups";

class GroupView extends React.Component {
  componentDidMount = () => this.props.getGroups();

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
    if (!group) return <Error content={"Group not found"} />;

    return (
      <div>
        <h1>{group.name}</h1>
        <img alt={group.name} src={group.image} width={300} />
        <h4>Description</h4>
        <p>{group.description || "NA"}</p>
        <h4>Category</h4>
        <p>{group.category || "NA"}</p>
        <h4>Contact Information</h4>
        <p>{group.contact_name}</p>
        <p>{group.contact_number}</p>
        <p>
          <Button type="link" href={group.link}>
            Group Link
          </Button>
        </p>
        <Link className="btn btn-secondary" to="/groups">
          <i className="icon-arrow-left" />
          {" Back"}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups || {}
});

const mapDispatchToProps = {
  getGroups
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupView);
