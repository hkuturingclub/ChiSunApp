import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>
          Chi Sun College
        </h1>
        <p className="lead">
          A Community of Freely Enquiring Minds.
        </p>
        <p>
          Founded in 2012, Chi Sun College represents the latest commitment from the
          University to transform and revitalise residential education.
          Chi Sun bears a clear mission to nurture a community of freely
          enquiring minds, and tasks itself in providing the most suitable environment for such.
        </p>
      </Jumbotron>
    </Row>
    <Row className="pt-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-map" />
          {' '}
          College Website
        </h3>
        <p>
          The Chi Sun College website has a lot of useful information.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="http://www.chisuncollege.hku.hk/" className="btn btn-primary">
            College Website
          </a>
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
