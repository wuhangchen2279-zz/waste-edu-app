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
        const inputFiles = this._getStaticImgFiles(require.context('../static/story_input', false, /.*\.png$/));
        const outputFiles = this._getStaticImgFiles(require.context('../static/story_output', false, /.*\.png$/));
        this.setState({
            inputFiles
        });
        this.setState({
            outputFiles
        });
    }

    _getStaticImgFiles(req) {
        return req.keys().reduce((obj, itm) => {
            const fileName = itm.substring(FILE_NAME_START_POS);
            const id = fileName.split('_')[0];
            if(!obj[id]) {
                obj[id] = [];
            } 
            obj[id].push(fileName);
            return obj;
        }, {});
    }

    renderStoryInputItems() {
        return this.state.inputFiles[this.props.story.id].map((file) => {
            return (
                <li key={file}>
                    <img width="70px" src={require(`../static/story_input/${file}`)} />
                </li>
            );
        })
    }

    render() {

        const {Content} = Layout;
        const {story} = this.props;
        const {inputFiles, outputFiles } = this.state;

        if(!story) {
            return <div>Loading</div>
        }

        console.log(inputFiles);
        console.log(outputFiles);
        
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
                                <div className="input-top">
                                    <img width="120px" alt="rubbish bin" src={require(`../static/story_input/rubbish_bin.png`)} />
                                </div>
                                <div className="input-bottom">
                                    <ul className='input-list-container'>
                                        {this.renderStoryInputItems()}
                                        <li><img width="80px" src={require('../static/story_input/1_inputItem_0.png')} alt="input item" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="story-output">
                                <img width="160px" src={require(`../static/story_output/${story.id}_outputItem_0.png`)} alt="output item"/>
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
