import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faBookReader,faHome,faTasks,faUsers  } from '@fortawesome/free-solid-svg-icons';

import { Layout } from 'antd';
import NavigationHeader from './components/navigation_header';
import StoriesComponent from './components/stories_component';
import HabitTrackerComponent from './components/habit_tracker_component';
import Home from './components/home';
import About from './components/about';
const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

library.add(
    faKey, 
    faBookReader,
    faHome,
    faTasks,
    faUsers);

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <Layout>
                <NavigationHeader />
                <Switch>
                    <Route path="/habit-tracker" component={HabitTrackerComponent} />
                    <Route path="/story/:id" component={StoriesComponent} />
                    {/* <Route path="/about" component={About} /> */}
                    <Route path="/" component={Home} />
                    
                </Switch>
            </Layout>
          </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
