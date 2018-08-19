import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Layout } from 'antd';
import { getAllHabits } from '../actions'

class HabitTrackerDetail extends Component {

    componentDidMount() {
        this.props.getAllHabits();
    }

    render() {
        const { Content } = Layout;
        console.log(this.props.habits);
        return (
            <Content>
                habit 
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    return {habits: state.habits};
}

export default connect(
    mapStateToProps,
    {getAllHabits}
)
(HabitTrackerDetail);