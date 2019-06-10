import { Link } from "react-router-dom";
import { List } from "antd";
import { connect } from "react-redux";
import { getGroups } from "../actions/groups";
import Error from "./Error";
import React from "react";

class GroupsList extends React.Component {
  componentDidMount = () => this.props.getGroups();

  render = () => {
    const { loading, error, groups } = this.props.groups;

    // Loading
    if (loading) return <div>Loading</div>;

    // Error
    if (error) return <Error content={error} />;

    // Show Listing
    return (
      <div>
        <h1>Groups</h1>
        <p>
          From festive parties to sports and from meditation to programming
          classes, these activities are almost entirely student-run, and exhibit
          the creativity and livelihood that is quintessential to the Chi Sun
          style.
        </p>
        <List
          itemLayout="horizontal"
          dataSource={groups}
          renderItem={item => (
            <List.Item
              actions={[
                <Link className="btn btn-primary" to={`/group/${item.id}`}>
                  View
                </Link>,
                <Link className="btn btn-primary" to={`/group/${item.id}/edit`}>
                  Edit
                </Link>
              ]}
            >
              <List.Item.Meta
                title={<Link to={`/group/${item.id}`}>{item.name}</Link>}
              />
            </List.Item>
          )}
        />
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
