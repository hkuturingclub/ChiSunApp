import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const GroupListing = ({ error, loading, groups }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = groups.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/group/${item.id}`}>
        <CardImg top src={item.image} alt={item.name} />
      </Link>
      <CardBody>
        <CardTitle>
          {item.name}
        </CardTitle>
        <CardText>
          {item.description}
        </CardText>
        <Link className="btn btn-primary" to={`/group/${item.id}`}>
          View Group
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            Groups
          </h1>
          <p>
            The following data is read directly from Firebase.
          </p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

GroupListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

GroupListing.defaultProps = {
  error: null,
};

export default GroupListing;
