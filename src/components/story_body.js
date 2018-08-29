import React, {Component} from 'react';
import { STORY_PLASTIC_ID } from '../constants/static_types';
import StoryPlasticComponent from './story_plastic';

//Story body component to render story detail information. For now, only supported plastic story
class StoryBodyComponent extends Component {
    render() {
        const {story, inputIndex} = this.props;
        switch(story.id) {
            case STORY_PLASTIC_ID:
                return (
                    <StoryPlasticComponent 
                        inputIndex={inputIndex} 
                        story={story} 
                        onOneAnimationFinished={() => this.props.onOneAniFinished()}
                    />
                );
            default: 
                console.warn(`Story ${story.id} not supprted!`);
        }
    }
}

export default StoryBodyComponent;