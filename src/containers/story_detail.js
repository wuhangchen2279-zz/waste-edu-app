import React, {Component} from 'react';
import { Layout } from 'antd';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import './story_detail.css'

class StoryDetail extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        var req = require.context('../static/story_output/', false, /.*\.png$/)
        console.log(req.keys());
    }

    render() {
        const {Content} = Layout;
        const {story} = this.props;

        if(!story) {
            return <div>Loading</div>
        }
        
        return(
            <Content style={{height: 'calc(100vh - 64px)'}}>
                <div className="story-container">
                    
                    <div 
                        className="story-info" 
                        style={{backgroundImage: `url(${require(`../static/story_bg/Story${story.id}_bg.png`)})`}}>
                        <div className="story-desc">
                            {story.description}
                        </div>
                        <div className="story-interaction">
                            <div className="story-input">

                            </div>
                            <div className="story-output">
                                <img width="160px" src={require('../static/story_output/Story1_outputItem_0.png')} />
                            </div>
                        </div>
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
