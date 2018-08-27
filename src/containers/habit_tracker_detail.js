import React, { Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import { getAllHabits } from '../actions';
import { Carousel } from 'antd';

class HabitTrackerDetail extends Component {

    // componentDidMount() {
    //     this.props.getAllHabits();
    // }

     render() {
    //     const { Content } = Layout;
    //     console.log(this.props.habits);
    //     return (
    //         <Content>
    //             habit 
    //         </Content>
    //     );
    // }

        return (
                <header className="masthead bg-primary text-white text-center">
                    <div className="container"> 
                        
                        <img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/habit_table_v2.png')} alt="" />
                        <button className="btn btn-primary btn-xl font-weight-light mb-1">Download Here!</button>
                        <br/><br/>
                        <h2 className="text-uppercase mb-0">This is how poeple use it!</h2>
                        <br/><br/>
                        <Carousel autoplay>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/bring own cups.png')} alt="" /></div>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/No straws.png')} alt="" /></div>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/bring own cups.png')} alt="" /></div>
                        </Carousel>

                        
                    </div>
                </header>
            
            );

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
    
    }
};

const mapStateToProps = (state) => {
    return {habits: state.habits};
}

export default connect(
    mapStateToProps,
    {getAllHabits}
)
(HabitTrackerDetail);