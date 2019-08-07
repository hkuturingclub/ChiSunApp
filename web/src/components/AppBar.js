import { Button, Col, Icon, Layout, Menu, Row } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { signOut } from "../actions/user";

const { Header, Content, Sider, Footer } = Layout;

const sidebarItems = [
  {
    text: "Home",
    route: "/",
    icon: "home"
  },
  {
    text: "Create Group",
    route: "/groups/create",
    icon: "user-add"
  },
  {
    text: "Groups",
    route: "/groups",
    icon: "team"
  },
  {
    text: "Create Event",
    route: "/event/create",
    icon: "calendar"
  },
  {
    text: "Manage Events",
    route: "/events/manage",
    icon: "book"
  }
];

class AppBar extends React.Component {
  render() {
    const { children, location } = this.props;
    const { user } = this.props.user;
    const baseLength = process.env.PUBLIC_URL.length;
    const currentRoute = location.pathname.slice(baseLength);
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ background: "#1DA57A" }}>
          <Row type="flex" justify="space-between">
            <Col span={19}>
              <h1 style={{ color: "#fff" }}>Chi Sun College</h1>
            </Col>
            <Col span={5} style={{ textAlign: "center" }}>
              {user && (
                <Button icon="logout" onClick={() => this.props.signOut()}>
                  Logout
                </Button>
              )}
              {!user && (
                <Link to="/login">
                  <Button icon="login">Login</Button>
                </Link>
              )}
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider
            theme="light"
            breakpoint="md"
            collapsedWidth="70"
            trigger="null"
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={[currentRoute]}
              selectedKeys={[currentRoute]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {sidebarItems.map(item => (
                <Menu.Item key={item.route}>
                  <Link to={item.route}>
                    <Icon type={item.icon} />
                    <span>{item.text}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px 24px 0" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {children}
            </Content>
            <Footer style={{ textAlign: "right" }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/hkuturingclub"
              >
                Chi Sun Turing Club
              </a>{" "}
              - University of Hong Kong
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppBar)
);
