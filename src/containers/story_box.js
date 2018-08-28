import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
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
    height: 100px;
    background: #d3fff6;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 6px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 3px solid #18bc9c;
`;

class StoryBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputIndex: null,
            isStoryPlaying: false,
            boxKey: 0,
            animationCounter: 0,
            showModal: false,
        }
    }

    onAnimationFinished() {
        this.setState({isStoryPlaying: false});
        this.setState({animationCounter: this.state.animationCounter + 1});
        if(this.state.animationCounter === this.props.story.storyInputs.length) {
            this.setState({showModal: true});
        }
    }

    handleOk(e) {
        this.setState({showModal: false});
        this.props.history.push('/habit-tracker');
    }

    handleCancel(e) {
        this.setState({boxKey: this.state.boxKey + 1});
        this.setState({
            inputIndex: null,
            animationCounter: 0
        });
        // this.setState
        this.setState({showModal: false});
    }

    render() {
        const {story} = this.props; 
        if(!story) {
            return <LoadingPanel />
        }
        return (
            <StoryContainer key={this.state.boxKey}>
                <StoryHeader>
                    <h5>{story.title}</h5>
                    <StoryInputComponent 
                        onStoryInputClicked={(index) => this.setState({inputIndex: index, isStoryPlaying: true})}
                        storyInputs={story.storyInputs}
                        isStoryPlaying={this.state.isStoryPlaying}
                    />
                </StoryHeader>
                <StoryBodyComponent 
                    story={story} 
                    inputIndex={this.state.inputIndex}
                    onOneAniFinished={() => this.onAnimationFinished()}
                />
                <Modal
                    centered
                    maskClosable={false}
                    title="Can You Please Help Me?"
                    visible={this.state.showModal}
                    footer={[
                        <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
                            Let's Do It!
                        </Button>
                    ]}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <p>Pictures goes here</p>
                </Modal>
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