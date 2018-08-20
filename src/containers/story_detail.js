import React, {Component} from 'react';
import { Layout } from 'antd';
import {connect} from 'react-redux';
import {getStory} from '../actions';
import { withRouter } from 'react-router';

class StoryDetail extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        if(id) {
            this.props.getStory(id);
        } 
    }

    render() {
        const {Content} = Layout;

        if(!this.props.story) {
            return <div>Loading</div>
        }
        
        return(
            <Content style={{height: 'calc(100vh - 64px)'}}>
                {this.props.story.title}
            </Content>
        );
    }

}

const mapStateToProps = ({stories}, ownProps) => {
    return { story: stories[ownProps.match.params.id]}
}

export default withRouter(connect(
    mapStateToProps,
    {getStory}
)(StoryDetail));
