import React,{Component} from 'react';
import {DragSource} from 'react-dnd';


const itemSource = {
    beginDrag(props){
        console.log('dragging');
        return props.item;
    },
    endDrag(props,monitor,component){
        return props.handleDrop(props.item.id);
    }
    
}

function collect(connect,monitor){
    return{
        connectDragSource:connect.dragSource(),
        connectDragPreview:connect.dragPreview(),
        isDragging:monitor.isDragging(),
    }
}
class Quizitem extends Component {
    render(){
        const{isDragging,connectDragSource,item} = this.props;
        return connectDragSource(
            <div className="item">
                <span>{item.name}</span>
            </div>
        )
        // return (
        //     <div className="item">
        //         {this.props.item.name}
        //     </div>
        // );
    }
}

export default DragSource('item',itemSource,collect)(Quizitem);