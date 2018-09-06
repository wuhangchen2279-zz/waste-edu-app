import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'font-awesome/css/font-awesome.min.css'
import { faKey, faBookReader,faHome,faTasks,faUsers, faArrowCircleLeft, faArrowCircleRight, faQuestionCircle  } from '@fortawesome/free-solid-svg-icons';


import { getAllStories, getAllHabits} from './actions/index';

import WebFont from 'webfontloader';
import App from './app';

//make use of redux thunk middleware
const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

//fetch stories and habits from redux thunk
store.dispatch(getAllStories());
store.dispatch(getAllHabits());

//load M+PLUS+Rounded+1c font family for whole website
WebFont.load({
    google: {
      families: ['M+PLUS+Rounded+1c', 'sans-serif']
    }
  });

//Add fontawesome libary to project
library.add(
    faArrowCircleLeft,
    faArrowCircleRight,
    faKey, 
    faBookReader,
    faHome,
    faTasks,
    faUsers,
    faQuestionCircle);


//make use of ant design layout


//render react router for different pages
ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
