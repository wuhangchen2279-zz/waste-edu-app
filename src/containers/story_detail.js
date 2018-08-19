import React, {Component} from 'react';
import { Layout } from 'antd';

class StoryDetail extends Component {

    render() {
        const {Content} = Layout;
        
        return(
            <Content style={{height: 'calc(100vh - 64px)'}}>
                Here is the detail of the story
            </Content>
        );
    }

}

export default StoryDetail;
