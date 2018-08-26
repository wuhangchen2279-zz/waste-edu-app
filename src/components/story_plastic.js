import React, {Component} from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import _ from 'lodash';
import HabitsBoxComponent from './habits_box';

const DetailContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${props.bgImage})`};
`;

const HabitContainer = styled.div`
    height: 30%;
`;

const AnimationComponent = styled.div`
    height: 80%;
`;

const AnimationItem = styled(posed.div({
   0: {
       x: ({positions}) => positions[0].x, 
       y: ({positions}) => positions[0].y, 
    },
   1: {
       x: ({positions}) => positions[1].x, 
       y: ({positions}) => positions[1].y, 
       rotate: 180,
       transition: {
           duration: 1500
        }
    },
    2: {
       x: ({positions}) => positions[2].x, 
       y: ({positions}) => positions[2].y, 
       rotate: 360,
       transition: {
           duration: 1500
        }
    }
}))`
    position: absolute;
    height: 100px;
    width: 100px;
    background-size: contain;
    ${props => `
        background-image: url(${props.itemImg});
    `}
`;


class StoryPlasticComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animationConfigs: {
                0: {
                    pose: 0,
                    positions: {
                        0: {x: 0, y: 0}, 
                        1: {x: 260, y: 150},
                        2: {x: 470, y: 240}
                    }
                },
                1: {
                    pose: 0,
                    positions: {
                        0: {x: 0, y: 0}, 
                        1: {x: 260, y: 150},
                        2: {x: 470, y: 470}
                    }
                }
            },
            animationCounter: 0,
            animationStarted: {},
            storyOutputIdx: 0,
        };
    }


    onAnimationStart() {
        const interval = setInterval(() => {
            this.setState(prevState => {
                const state = _.cloneDeep(prevState);
                _.keys(state.animationConfigs).map(key => {
                    state.animationConfigs[key].pose =  state.animationConfigs[key].pose + 1;
                });
                state.animationCounter = state.animationCounter + 1;
                return state;
            });
            if(this.state.animationCounter > 2) {
                clearInterval(interval);
                this.setState({storyOutputIdx: this.state.storyOutputIdx + 1});
            }
        }, 1000);
        setTimeout(() => {
            this.setState({animationStarted: {...this.state.animationStarted, [this.props.inputIndex]: true}});
        }, 500)
    }

    renderAnimationItems() {
        const {story, inputIndex} = this.props;
        const selHabit = story.habits[inputIndex];
        return selHabit && this.state.animationStarted[inputIndex]? (
            selHabit.animationImg.map((img, index) => {
                return ( 
                    <AnimationItem key={img}
                        itemImg={require(`../static/story_animate/${img}`)}    
                        pose={this.state.animationConfigs[index].pose}
                        positions={{
                            0: {x: this.state.animationConfigs[index].positions[0].x, y: this.state.animationConfigs[index].positions[0].y}, 
                            1: {x: this.state.animationConfigs[index].positions[1].x, y: this.state.animationConfigs[index].positions[1].y},
                            2: {x: this.state.animationConfigs[index].positions[2].x, y: this.state.animationConfigs[index].positions[2].y}
                        }}
                    />
                );
            })
        ): null;
    }

    render() {
        const {story, inputIndex} = this.props;
        return (
            <DetailContainer bgImage= {require(`../static/story_bg/${story.id}_bg.svg`)}>
                <HabitContainer>
                    <HabitsBoxComponent 
                        onHabitRendered={() => this.onAnimationStart()} 
                        goodHabitImg={inputIndex !== null? story.habits[inputIndex].goodHabitImg: null}
                        badHabitImg={inputIndex !== null? story.habits[inputIndex].badHabitImg: null}
                        habitRef={inputIndex}
                    />
                </HabitContainer>
                <AnimationComponent>
                    {this.renderAnimationItems()}
                    <img style={{marginTop: '200px'}} src={require(`../static/story_output/${story.id}_outputItem_${this.state.storyOutputIdx}.png`)} alt="story output" />
                </AnimationComponent>
            </DetailContainer>
        );
    }
}

export default StoryPlasticComponent;