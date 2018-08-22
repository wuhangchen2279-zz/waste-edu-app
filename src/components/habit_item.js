import React from 'react';
import LoadingPanel from './loading_panel';

const HabitItem = (props) => {
    const {index, badHabit, goodHabit, habit} = props;
    if(!habit) {
        return <LoadingPanel />
    }

    return (
        <li className='habit-item-container'>
            <div className="habit-title">
                {index}. {habit.title}
            </div>
            <div className="habit-pics">
                <div className="bad-habit">
                    <img width="160px" src={require(`../static/habit_bad/${badHabit}`)} alt="bad habit"/>
                </div>
                <div className="good-habit">
                    <img width="160px" src={require(`../static/habit_good/${goodHabit}`)} alt="good habit"/>
                </div>
            </div>
        </li>
    );
}

export default HabitItem;