import { Alert, Progress } from "antd";
import { Link } from "react-router-dom";
import { addGroup, reset } from "../actions/groupCreate";
import { connect } from "react-redux";
import GroupForm from "./GroupForm";
import React from "react";

import { getGroups } from "../actions/groups";
import Error from "./Error";

class GroupEdit extends React.Component {
  componentDidMount = () => {
    const { reset } = this.props;
    this.props.getGroups();
    reset();
  };

  render() {
    const { loading, groups } = this.props.groups;

    // Loading
    if (loading) return <div> Loading... </div>;

    const { id } = this.props.match.params;
    // Get this Group from all groups
    let group = null;
    if (id && groups) {
      group = groups.find((item) => item.id === id);
    }

    // Group not found
    if (!group) return <Error content={"Group not found"} />;

    const { addGroup, groupCreate } = this.props;
    const { processing, error, groupId } = groupCreate;
    return (
      <div>
        <h1>Edit Group</h1>
        {/* Show processing */}
        {processing && (
          <div style={{ width: 170 }}>
            <Progress percent={50} size="small" status="active" />
          </div>
        )}

        {/* Show success or error messages */}
        {groupId && (
          <div>
            <Alert
              message={`Group with id ${groupId} has been successfully updated.`}
              type="success"
            />
            <Link className="btn btn-primary" to={`/group/${groupId}`}>
              View Group
            </Link>
          </div>
        )}
        {error && (
          <div>
            <Alert message={error} type="error" />
          </div>
        )}

        {!processing && !groupId && (
          <GroupForm
            onSubmit={(groupDetails) => addGroup(groupDetails, group.id)}
            initialValues={group}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  groupCreate: state.groupCreate || {},
  groups: state.groups || {},
});

const mapDispatchToProps = {
  reset,
  addGroup,
  getGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit);
