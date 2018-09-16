import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../constants/errors';
import Loading from './Loading';
import Error from './Error';

const GroupView = ({
  error,
  loading,
  groups,
  groupId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Group from all groups
  let group = null;
  if (groupId && groups) {
    group = groups.find(item => parseInt(item.id, 10) === parseInt(groupId, 10));
  }

  // Group not found
  if (!group) return <Error content={ErrorMessages.group404} />;

  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            {group.name}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="group-view-card">
          <Card>
            <CardHeader>
              About this group
            </CardHeader>
            <CardBody>
              <CardText>
                {group.description}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="group-view-card">
          <Card>
            <CardHeader>
              Contact Information
            </CardHeader>
            <CardBody>
              <CardText>
                <p>{group.contactName}</p>
                <p>{group.contactNumber}</p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/groups">
            <i className="icon-arrow-left" />
            {' '}
            Back
          </Link>
        </Col>
      </Row>
    </div>
  );
};

GroupView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GroupView.defaultProps = {
  error: null,
};

export default GroupView;
