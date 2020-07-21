import { Alert, Progress } from "antd";
import { addGroup, reset } from "../actions/groupCreate";
import { connect } from "react-redux";
import GroupForm from "./GroupForm";
import React from "react";

class GroupCreate extends React.Component {
  componentDidMount = () => {
    const { reset } = this.props;
    reset();
  };

  render() {
    const { addGroup, groupCreate } = this.props;
    const { processing, error, groupId } = groupCreate;
    return (
      <div>
        <h1>Create Group</h1>
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
              message={`Group has been successfully created with id ${groupId}.`}
              type="success"
            />
          </div>
        )}
        {error && (
          <div>
            <Alert message={error} type="error" />
          </div>
        )}

        {/* Do not show form when processing */}
        {!processing && <GroupForm onSubmit={addGroup} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  groupCreate: state.groupCreate || {},
});

const mapDispatchToProps = {
  reset,
  addGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreate);
