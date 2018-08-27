import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import LoadingPanel from '../components/loading_panel';
import StoryBodyComponent from '../components/story_body';
import StoryInputComponent from '../components/story_input';

const StoryContainer = styled.div`
    margin: 10px auto;
    height: 960px;
    width: 1163px;
    border: 3px solid #18bc9c;
    text-align: center;
    border-radius: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const StoryHeader = styled.div`
    height: 40px;
    background: #d3fff6;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 6px 20px;
    border-bottom: 3px solid #18bc9c;
`;

const StoryFooter = styled.div`
    height: 60px;
    background: #d3fff6;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top: 3px solid #18bc9c;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class StoryBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputIndex: null,
            isStoryPlaying: false,
        }
    }

    render() {
        const {story} = this.props; 
        if(!story) {
            return <LoadingPanel />
        }
        return (
            <StoryContainer>
                <StoryHeader>
                    <h5>{story.title}</h5>
                </StoryHeader>
                <StoryBodyComponent 
                    story={story} 
                    inputIndex={this.state.inputIndex}
                    onOneAniFinished={() => this.setState({isStoryPlaying: false})}
                />
                <StoryFooter>
                    <StoryInputComponent 
                        onStoryInputClicked={(index) => this.setState({inputIndex: index, isStoryPlaying: true})}
                        storyInputs={story.storyInputs}
                        isStoryPlaying={this.state.isStoryPlaying}
                    />
                </StoryFooter>
            </StoryContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {story: state.stories[id]}
}

export default withRouter(
    connect( 
        mapStateToProps,
        null
    )(StoryBoxComponent)
);