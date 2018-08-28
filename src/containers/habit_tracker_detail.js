import React, { Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import { Carousel } from 'antd';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import _ from 'lodash';
import HabitRowItem from '../components/habit_row_item';

class HabitTrackerDetail extends Component {
    
    downloadPdf() {
        const input = document.getElementById('imgToPrint');
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1050, 720]
            });
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("habit_tracker.pdf");
        })
        ;
    }

    renderHabitGrid() {
        const {habits} = this.props;
        return _.map(habits, (habit, index) => {
            console.log(habit);
            return <HabitRowItem key={habit.id} habit={habit} index={index}/>
        })
    }

    render() {
        return (
                <div className="container"> 
                    <div style={{marginTop: '3rem'}}>
                        {this.renderHabitGrid()}
                    </div>
                    <div id="imgToPrint">
                        <img className="img-fluid mt-5 mb-5 d-block mx-auto" src={require('../static/habit_good/habit_table_v2.png')} alt="" />
                    </div>
                    <button onClick={this.downloadPdf} className="btn btn-primary btn-xl font-weight-light mb-1">Download Here!</button>
                    <div style={{marginTop: '3rem'}}>
                        <h3 className="text-uppercase mb-2">This is how people use it!</h3>
                        <Carousel autoplay>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/bring own cups.png')} alt="" /></div>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/No straws.png')} alt="" /></div>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/bring own cups.png')} alt="" /></div>
                        </Carousel>
                    </div>
                </div>
            
            );

    }
};

const mapStateToProps = (state) => {
    return {habits: state.habits};
}

export default connect(
    mapStateToProps,
    {}
)
(HabitTrackerDetail);