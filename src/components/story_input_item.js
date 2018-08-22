import React, {Component} from 'react';
import { DragSource } from 'react-dnd';


class StoryInputItem extends Component {
    render() {
        const {item} = this.props;
        return(
            <li>
                <img width="70px" src={item} alt="story input item"/>
            </li>
        );
    }
}

export default DragSource('item', spec, collect)(StoryInputItem);
