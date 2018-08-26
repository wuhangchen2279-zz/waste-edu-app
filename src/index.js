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
import 'font-awesome/css/font-awesome.min.css'
import { faEnvelope, faKey, faBookReader,faHome,faTasks,faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import NavigationHeader from './components/navigation_header';
import StoriesComponent from './components/stories_component';
import HabitTrackerComponent from './components/habit_tracker_component';
import StoriesGridComponent from './containers/stories_grid';
import { getAllStories, getAllStoryInputs } from './actions/index';
import { STORY_PLASTIC_ID } from './constants/static_types';
import styled from 'styled-components';
import StoryBoxComponent from './containers/story_box';


const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllStories());

library.add(
    faEnvelope, 
    faKey, 
    faBookReader,
    faHome,
    faTasks,
    faChevronCircleUp);

const MainDiv = styled.div`
    height: calc(100vh - 20px);
`;

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <MainDiv>
                {/* <NavigationHeader /> */}
                <Switch>
                    <Route path="/habit-tracker" component={HabitTrackerComponent} />
                    <Route path="/story/:id" component={StoryBoxComponent} />
                    <Route path="/stories" component={StoriesGridComponent} />
                    <Route path="/" component={StoriesComponent} />
                </Switch>
            </MainDiv>
          </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
