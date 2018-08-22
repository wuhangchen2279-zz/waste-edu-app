import React, {Component} from 'react';
import { Layout } from 'antd';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { FILE_NAME_START_POS } from '../constants/static_types'
import './story_detail.css'

class StoryDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {inputFiles: {}, outputFiles: {}};
    } 

    componentDidMount() {
        const {id} = this.props.match.params;
        var req = require.context('../static/story_output/', false, /.*\.png$/)
        const inputFiles = req.keys().reduce((obj, itm) => {
            const fileName = itm.substring(FILE_NAME_START_POS);
            obj[fileName.split('_')[0]] = fileName;
            return obj;
        }, {})
        console.log(inputFiles);
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
                        style={{backgroundImage: `url(${require(`../static/story_bg/${story.id}_bg.png`)})`}}>
                        <div className="story-desc">
                            {story.description}
                        </div>
                        <div className="story-interaction">
                            <div className="story-input">

                            </div>
                            <div className="story-output">
                                <img width="160px" src={require(`../static/story_output/${story.id}_outputItem_0.png`)} />
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
