import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import NavMenuItem from './nav_menu_item';

class NavigationHeader extends Component {
  render() {
    const { Header} = Layout;
    
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', float: "right" }}
        >
          <Menu.Item key="1">
            <NavMenuItem routeUrl="/" icon="home" label="Home" iconColor="#f0c24b" />
          </Menu.Item>
          <Menu.Item key="2">
            <NavMenuItem routeUrl="/stories" icon="book-reader" label="Stroy" iconColor="#ea7066"/>
          </Menu.Item>
          <Menu.Item key="3">
            <NavMenuItem routeUrl="/habit-tracker" icon="tasks" label="Tracker" iconColor="#a597e7"/>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(NavigationHeader);