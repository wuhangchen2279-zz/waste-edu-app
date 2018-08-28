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
import { faKey, faBookReader,faHome,faTasks,faUsers  } from '@fortawesome/free-solid-svg-icons';

import NavigationHeader from './components/navigation_header';
import HabitTrackerComponent from './components/habit_tracker_component';
import StoriesGridComponent from './containers/stories_grid';
import { getAllStories} from './actions/index';
import styled from 'styled-components';
import StoryBoxComponent from './containers/story_box';
import Home from './components/home';
import WebFont from 'webfontloader';
import { Layout } from 'antd';
import HabitTrackerDetail from './containers/habit_tracker_detail';

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(getAllStories());

WebFont.load({
    google: {
      families: ['M+PLUS+Rounded+1c', 'sans-serif']
    }
  });

library.add(
    faKey, 
    faBookReader,
    faHome,
    faTasks,
    faUsers);

const { Content, Footer } = Layout;

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
            <Layout>
                <NavigationHeader />
                <Content className="masthead bg-primary text-white text-center" style={{ minHeight: 'calc(100vh - 186px)', marginTop: 64 }}>
                    <Switch>
                        <Route path="/habit-tracker" component={HabitTrackerDetail} />
                        <Route path="/story/:id" component={StoryBoxComponent} />
                        <Route path="/stories" component={StoriesGridComponent} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Waste.edu Design ©{(new Date()).getFullYear()}
                </Footer>
            </Layout>
          </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
