import React from 'react';
import LoadingPanel from './loading_panel';

const HabitRowItem = (props) => {
    const {habit, index} = props;
    return (
        <div className="habit-item-container">
            <div className="habit-title">
                {index}. {habit.title}
            </div>
            <div className="habit-pics">
                <div className="bad-habit">
                    <img width="160px" src={require(`../static/habit_bad/${habit.badHabitImg[0]}`)} alt="bad habit"/>
                </div>
                <div className="good-habit">
                    <img width="160px" src={require(`../static/habit_good/${habit.goodHabitImg[0]}`)} alt="good habit"/>
                </div>
            </div>
        </div>
    )
};

export default HabitRowItem;
