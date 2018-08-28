import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'antd';

const Home = (props) => {


    return (
            <div className="container">
                <Carousel autoplay>
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
                </Carousel> 
                <br/>
                <h1 className="text-uppercase mb-0">Fight Waste for Animals</h1>
                <hr className="star-light"/>
                <Link to="/stories">
                    <button className="btn btn-primary btn-xl font-weight-light mb-1">Read Story Now!</button>
                </Link>
            </div>
    );
}

export default Home;