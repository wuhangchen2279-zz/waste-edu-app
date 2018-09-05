import React,{Component} from 'react';
import {DropTarget} from'react-dnd';
function collect(connect,monitor){
    return{
        connectDropTarget:connect.dropTarget(),
        hovered:monitor.isOver(),
        item:monitor.getItem(),
    }
}

class Quiztarget extends Component{
    render(){
        const {connectDropTarget,hovered,item}=this.props;
        return(
            <div className="target">
                GoodHabit
            </div>
        );
    }
}

export default DropTarget('item',{},collect)(Quiztarget);