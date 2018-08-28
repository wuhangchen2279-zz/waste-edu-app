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
          <div style={{margin: "3rem auto"}}>
            <img src={ this.backgrounds[this.state.backgroundIndex] } />
            <div style={{
              position: "relative",
              bottom: "478px"
            }}>
              <h1 className="text-uppercase mb-0">Fight Waste for Animals</h1>
              {/* <hr className="star-light"/> */}
                <Link to="/stories" 
                    className="btn btn-primary btn-xl font-weight-light mb-1 mt-3">
                    Read Story Now!
                </Link>
            </div>
          </div>
        )
      }
    }
export default HomeSliders;