import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationHeader extends Component {
  render() {
    const {pathname} = this.props.location;

    let rootPath = pathname.split('/')[1];
    if(rootPath && rootPath === 'story') {
      rootPath = '/';
    } else {
      rootPath = pathname;
    }
    
    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase navbar-shrink" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Logo</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>

          <div className="navbar-collapse collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                 <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#home">
                  <div className="flex-container">
                    <div className="flex-item">
                      <span style={{backgroundColor: '#f0c24b', borderRadius: '20px',padding:'10px'}}><FontAwesomeIcon icon="home" /></span>
                    </div>
                    < div className="flex-item">Home</div>
                  </div>
                </a>
              </li>

              <li className="nav-item mx-0 mx-lg-1">
                 <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#story">
                  <div className="flex-container">
                    <div className="flex-item">
                      <span style={{backgroundColor: '#ea7066', borderRadius: '20px',padding:'10px'}}><FontAwesomeIcon icon="book-reader" /></span>
                    </div>
                    < div className="flex-item">Story</div>
                  </div>
                </a>
              </li>

              <li className="nav-item mx-0 mx-lg-1">
                <Link to="/habit-tracker">
                    <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#tracker" >
                      <div className="flex-container">
                        <div className="flex-item">
                          <span style={{backgroundColor: '#b5d56a', borderRadius: '20px',padding:'10px'}}><FontAwesomeIcon icon="tasks" /></span>
                        </div>
                        < div className="flex-item">Track</div>
                      </div>
                    </a>
                </Link>
              </li>

              {/* <li className="nav-item mx-0 mx-lg-1">
                 <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">
                  <div className="flex-container">
                    <div className="flex-item">
                      <span style={{backgroundColor: '#84bed6', borderRadius: '20px',padding:'10px'}}><FontAwesomeIcon icon="users" /></span>
                    </div>
                    < div className="flex-item">About</div>
                  </div>
                </a>
              </li> */}

              {/* <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">
                <FontAwesomeIcon icon="tasks"></FontAwesomeIcon>
                  Habit Tracker
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      // <button className="btn btn-primary"></button>
        
          // <Link to="/">Stories</Link>
          // <Link to="/habit-tracker">Habit Tracker</Link>
    );
  }
}

export default withRouter(NavigationHeader);