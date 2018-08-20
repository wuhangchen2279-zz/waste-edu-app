import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavigationHeader extends Component {
  render() {
    const {Header} = Layout;
    const {pathname} = this.props.location;

    let rootPath = pathname.split('/')[1];
    if(rootPath && rootPath === 'story') {
      rootPath = '/';
    } else {
      rootPath = pathname;
    }
    
    return (
        <Header className="header">
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['/']}
              selectedKeys={[rootPath]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/">
                <Link to="/">Stories</Link>
              </Menu.Item>
              <Menu.Item key="/habit-tracker">
                <Link to="/habit-tracker">Habit Tracker</Link>
              </Menu.Item>
            </Menu>
          </Header>
    );
  }
}

export default withRouter(NavigationHeader);