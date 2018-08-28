import React, { Component } from 'react';
import { Layout } from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import HomeSliders from '../components/home_slider';

const Home = (props) => {

    return (
        <div className="container">
            <HomeSliders animDuration={1} />
        </div>
    );
}

export default Home;