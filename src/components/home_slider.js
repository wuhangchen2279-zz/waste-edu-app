import React, { Component } from 'react';


class HomeSliders extends React.Component {
        constructor(props) {
          super(props)
        this.backgrounds = ["../static/home/Home01.png", 
        "../static/home/Home02.png",
         "../static/home/Home03.png",
         "../static/home/Home04.png",
         "../static/home/Home05.png",
         "../static/home/Home06.png",
         "../static/home/Home07.png",
         "../static/home/Home08.png",
         "../static/home/Home09.png",
         "../static/home/Home10.png"]
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
          <div>
            <img src={ this.backgrounds[this.state.backgroundIndex] } />
          </div>
        )
      }
    }
export default HomeSliders;
// ReactDOM.render(
//   <HomeSliders animDuration={1} />,
//   document.getElementById('container')
// );