import React, {Component} from 'react';
import { Layout } from 'antd';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import './story_detail.css'

class StoryDetail extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
    }

    render() {
        const {Content} = Layout;

        if(!this.props.story) {
            return <div>Loading</div>
        }
        
        return(
            <Content style={{height: 'calc(100vh - 64px)'}}>
                <div className="story-container">
                    <div className="story-info" style={{backgroundColor: 'red'}}>

                    </div>
                </div>
            </Content>
        );
    }

}

const mapStateToProps = ({stories}, ownProps) => {
    const {id} = ownProps.match.params;
    const selectedStoryIdx = id? id: Object.keys(stories)[0] 
    return { story: stories[selectedStoryIdx]}
}

export default withRouter(connect(
    mapStateToProps,
    null
)(StoryDetail));
