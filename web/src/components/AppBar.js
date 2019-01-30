import React from 'react';
import {
    Layout, Menu, Icon,
  } from 'antd';
import { Link } from 'react-router-dom'; 
const { Header, Content, Sider, Footer } = Layout;

const sidebarItems = [
    {
      text: 'Home',
      route: '/',
      icon: 'home'
    },
    {
      text: 'Groups',
      route: '/groups',
      icon: 'team'
    },
    {
      text: 'Create Event',
      route: '/event/create',
      icon: 'calendar'
    }
];

export default class AppBar extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ background: '#1DA57A' }}>
                <h1 style={{ color: '#fff' }}>Chi Sun College</h1>
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
                    defaultSelectedKeys={[`${window.location.pathname}`]}
                    style={{ height: '100%', borderRight: 0 }}
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
                <Layout style={{ padding: '24px 24px 0' }}>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                    >
                    {children}
                    </Content>
                    <Footer style={{ textAlign: 'right' }}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/hkuturingclub"
                    >
                        Chi Sun Turing Club
                    </a> - University of Hong Kong
                    </Footer>
                </Layout>
                </Layout>
            </Layout>
        );        
    }
}