import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { getAllStories } from '../actions';
import _ from 'lodash';

class StoriesSideBar extends Component {

    componentDidMount() {
        this.props.getAllStories();
    }

    renderStories() {
        return _.map(this.props.stories, story => {
            return (
                <li key={story.id}>
                    {story.title}
                </li>
            );
        });
    }

    render() {
        const {Sider} = Layout;
        return (
            <Sider 
                width={200} 
                style={{overflow: 'auto', height: 'calc(100vh - 64px)', left: 0, background: '#fff'}}>
                <ul>
                    {this.renderStories()}
                </ul>
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