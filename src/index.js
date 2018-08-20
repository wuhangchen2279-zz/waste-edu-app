import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { Layout } from 'antd';
import NavigationHeader from './components/navigation_header';
import StoriesComponent from './components/stories_component';
import HabitTrackerComponent from './components/habit_tracker_component';
import { getStory } from './actions';


const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getStory(1));

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
