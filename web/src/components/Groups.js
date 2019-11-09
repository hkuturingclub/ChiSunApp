import { Link } from "react-router-dom";
import { List } from "antd";
import Error from "./Error";
import React from "react";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GROUPS_QUERY = gql `
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

const GroupsList = () => {
    const { loading, error, data } = useQuery(GROUPS_QUERY);

    // Loading
    if (loading) return <div>Loading</div>;

    // Error
    if (error) return <Error content={error} />;
    const{groups} = data;

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

export default GroupsList;
