import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class HomeSliders extends React.Component {
        constructor(props) {
          super(props)
        this.backgrounds = [require("../static/home/Home01.png"), 
          require("../static/home/Home02.png"),
          require("../static/home/Home03.png"),
          require("../static/home/Home04.png"),
          require("../static/home/Home05.png"),
          require("../static/home/Home06.png"),
          require("../static/home/Home07.png"),
          require("../static/home/Home08.png"),
          require("../static/home/Home09.png"),
          require("../static/home/Home10.png")]
        this.state = { backgroundIndex: 0 }
        
        this.changeBackground = this.changeBackground.bind(this)
      }
    
      componentDidMount () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.props.animDuration * 1000
        )
      }
      
      componentWillUnmount() {
          if (this.timeout) clearTimeout(this.timeout)
      }
    
      changeBackground () {
        this.setState(function ({ backgroundIndex }) {
          const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length
    
          return { backgroundIndex: nextBackgroundIndex }
        }, function () {
          this.timeout = setTimeout(
            this.changeBackground,
            this.props.animDuration * 1000
          )
        })
      }
    
      render () {
        return (
          <div style={{margin: "5rem auto"}}>
          <h2 className="mb-4">
            <p>Dear angel, do you know every year more than 130,000 tonnes of plastics end up in the ocean and cause marine animals die?</p>
            <p>Would you be willing to take actions to save their lives...</p></h2>
            <img src={ this.backgrounds[this.state.backgroundIndex] } />
            <div style={{
              position: "relative",
              bottom: "478px"
            }}>
              {/* <h2 className="mb-0">Fight Waste for Animals !</h2> */}
              {/* <hr className="star-light"/> */}
                <Link to="/story/1" 
                    style={{width: '200px', marginTop: '213px'}}
                    className="btn btn-primary btn-xl font-weight-light mb-1">
                    Read Story Now!
                </Link>
            </div>
            
          </div>
          
        )
      }
    }
export default HomeSliders;