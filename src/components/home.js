import React from 'react';

const Home = (props) => {


    return (
        <div className="container"> 
            <img className="img-fluid mb-5 d-block mx-auto" src={require('../static/story_bg/1_bg.svg')} alt="" />
            <h1 className="text-uppercase mb-0">Fight Waste for Animals</h1>
            <hr className="star-light"/>
            <button className="btn btn-primary btn-xl font-weight-light mb-1">Read Story Now!</button>
        </div>
            
    );
}

export default Home;