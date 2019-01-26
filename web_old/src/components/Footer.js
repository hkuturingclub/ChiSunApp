import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col sm="12" className="text-right pt-3">
        <p>

          Developed by
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/hkuturingclub">

            Chi Sun Turing Club
          </a>

          .
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
