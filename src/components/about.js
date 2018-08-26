import React, { Component } from 'react';
import { Layout } from 'antd';

const About = (props) => {


    return (
        <header className="masthead bg-primary text-white text-center" >
            <div className="container"> 
                <img className="img-fluid mb-5 d-block mx-auto" src={require('../static/story_bg/1_bg.png')} alt="" />
                <h1 className="text-uppercase mb-0">Fight Waste for Animals</h1>
                <hr className="star-light"/>
                <button className="btn btn-primary btn-xl font-weight-light mb-1">Read Story Now!</button>
            </div>
       </header>



        /* {<li className='habit-item-container'>
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
        </li> }*/
    );
}

export default About;