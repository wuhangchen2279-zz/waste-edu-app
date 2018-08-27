import React, {Component} from 'react';
import styled from 'styled-components';
import { ANIMATION_SPEED_HABIT } from '../constants/static_types';

const HabitAnimation = styled.div`
    height: 200px;
    width: 200px;
    ${props => `
        background-image: url(${props.habitImgs});
    `}
`;

class HabitItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            habitImage: props.habitsImg[0],
            renderCounter: 0
        };
    }

    componentDidMount() {
        const {habitsImg} = this.props;
        if(this.props.onAnimationFinished && habitsImg) {
            const interval = setInterval(() => {
                this.setState({habitImage: habitsImg[this.state.renderCounter]});
                this.setState({renderCounter: this.state.renderCounter + 1});
                if(this.state.renderCounter > habitsImg.length - 1) {
                    clearInterval(interval);
                    this.props.onAnimationFinished();
                }
            }, ANIMATION_SPEED_HABIT);
        }
    }

    render() {
        return (
            <HabitAnimation 
                habitImgs={this.state.habitImage}
            />
        );
    }
}

export default HabitItem;