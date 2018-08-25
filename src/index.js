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
import { faEnvelope, faKey, faAddressBook, faBookReader,faHome,faTasks,faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import { Layout } from 'antd';
import NavigationHeader from './components/navigation_header';
import StoriesComponent from './components/stories_component';
import HabitTrackerComponent from './components/habit_tracker_component';


const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

library.add(
    faEnvelope, 
    faKey, 
    faBookReader,
    faHome,
    faTasks,
    faChevronCircleUp);

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <Layout>
                <NavigationHeader />
                <Switch>
                    <Route path="/habit-tracker" component={HabitTrackerComponent} />
                    <Route path="/story/:id" component={StoriesComponent} />
                    <Route path="/" component={StoriesComponent} />
                </Switch>
            </Layout>
          </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
