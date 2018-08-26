import React, {Component} from 'react';
import styled from 'styled-components';

const InputImage = styled.div`
    margin: 5px;
    width: 120px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    pointer-events: auto;
    /* opacity: 0.5; */
    /* pointer-events: none; */
    ${props => `
        background-image: url(${props.inputBg});
        opacity: ${(props.clicked || props.storyPlaying)? 0.5: 1};
        pointer-events: ${(props.clicked || props.storyPlaying)? 'none': 'auto'};;
    `}
`;

class StoryInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: {},
            isStoryPlaying: false
        }
    }

    onInputClicked(index) {
        this.setState({clicked: {...this.state.clicked, [index]: true}});
        this.setState({isStoryPlaying: true});
        this.props.onStoryInputClicked(index);
        setTimeout(() => {
            this.setState({isStoryPlaying: false});
        }, 7000)
    }


    render() {
        const {storyInputs} = this.props;
        return (
            <div style={{display: 'flex'}}>
                {storyInputs.map((input, index) => {
                    return (
                        <InputImage 
                            key={input}
                            index={index}
                            onClick={() => this.onInputClicked(index)}
                            clicked={this.state.clicked[index]}
                            storyPlaying={this.state.isStoryPlaying}
                            imgOpacity={this.state.clicked[index]? '0.5': '1'}
                            inputBg={require(`../static/story_input/${input}`)}/>
                    );
                })}
            </div>
        );
    }
    
}

export default StoryInputComponent;