import React, { Component , PropTypes} from 'react';
import {connect} from 'react-redux';
import { getAllHabits } from '../actions';
import { Carousel } from 'antd';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class HabitTrackerDetail extends Component {
    
    downloadPdf() {
        const input = document.getElementById('imgToPrint');
        html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape'
            });
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("habit_tracker.pdf");
        })
        ;
    }

     render() {
    
        return (
                <header className="masthead bg-primary text-white text-center">
                    <div className="container"> 
                        
                        <img id="imgToPrint" className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/habit_table_v2.png')} alt="" />
                        <button onClick={this.downloadPdf} className="btn btn-primary btn-xl font-weight-light mb-1">Download Here!</button>
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