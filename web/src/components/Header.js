import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, Collapse } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { SidebarNavItems } from './Sidebar';

class Header extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleDropDown = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <header>
        <Navbar dark color="primary" expand="sm" className="fixed-top">
          <Link to="/" className="navbar-brand" style={{ color: '#FFF' }}>
            Chi Sun College
          </Link>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div className="d-block d-sm-none">{SidebarNavItems()}</div>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(Header);
