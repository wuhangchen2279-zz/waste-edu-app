import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { getAllStories } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class StoriesSideBar extends Component {

    componentDidMount() {
        this.props.getAllStories();
    }

    renderStories() {
        
        return _.map(this.props.stories, (story, index) => {
            return (
                <Menu.Item key={index}>
                    <Link to={`/story/${story.id}`}>
                        {story.title}
                    </Link>
                </Menu.Item>
            );
        });
    }

    render() {
        const {Sider} = Layout;
        return (
            <Sider 
                width={200} 
                style={{overflow: 'auto', height: 'calc(100vh - 64px)', left: 0, background: '#fff'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0}}
                >
                    {this.renderStories()}
                </Menu>
            </Sider>
        );
    }
}

const mapStateToProps = (state) => {
    return { stories: state.stories }
}

export default connect(
    mapStateToProps, 
    { getAllStories }
)(StoriesSideBar);