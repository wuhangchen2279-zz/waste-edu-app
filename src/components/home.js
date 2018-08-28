import React, { Component } from 'react';
import { Layout } from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import HomeSliders from '../components/home_slider';

const Home = (props) => {

    return (
        <header className="masthead bg-primary text-white text-center" >
            <div className="container">
                    <HomeSliders animDuration={1} />
                        {/* <Carousel autoplay>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home01.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home02.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home03.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home04.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home05.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home06.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home07.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home08.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home09.png')} alt="" /></div>
                        <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/home/Home10.png')} alt="" /></div>
                        </Carousel>  */}
                <br/>
                <h1 className="text-uppercase mb-0">Fight Waste for Animals</h1>
                <hr className="star-light"/>
                <Link to="/stories">
                    <button className="btn btn-primary btn-xl font-weight-light mb-1">Read Story Now!</button>
                </Link>
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

export default Home;