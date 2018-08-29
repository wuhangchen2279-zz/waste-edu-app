import React, {Component} from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

//styled component to render input image. background img re-rendered based on props setting.
const InputImage = styled.div`
    margin: 5px;
    width: 80px;
    height: 80px;
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
//componet to render story input buttons, which allow user to play story animation
class StoryInputComponent extends Component {

    //constructor function for story input. init state for clicked
    constructor(props) {
        super(props);
        this.state = {
            clicked: {},
        }
    }

    //handle event when input button get clicked
    onInputClicked(index) {
        this.setState({clicked: {...this.state.clicked, [index]: true}});
        this.setState({isStoryPlaying: true});
        this.props.onStoryInputClicked(index);
    }

    //render the story input buttons
    render() {
        const {storyInputs} = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Icon type="caret-down" style={{color: '#18bc9c', fontSize: "40px"}} />
                {storyInputs.map((input, index) => {
                    return (
                        <InputImage 
                            key={input}
                            index={index}
                            onClick={() => this.onInputClicked(index)}
                            clicked={this.state.clicked[index]}
                            storyPlaying={this.props.isStoryPlaying}
                            imgOpacity={this.state.clicked[index]? '0.5': '1'}
                            inputBg={require(`../static/story_input/${input}`)}/>
                    );
                })}
                <Icon type="caret-up" style={{color: '#18bc9c', fontSize:"40px"}} />
            </div>
        );
    }
    
}

export default StoryInputComponent;