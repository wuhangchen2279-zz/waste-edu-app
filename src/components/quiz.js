import React, {Component} from 'react';
import quiz_item.js from './quiz_item';
import quiz_target.js from './quiz_target';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd'

class Quiz extends Component{
    state = {
        items:[
            {id:1,name:'Item1'},
            {id:2,name:'Item2'},
            {id:3,name:'Item3'},
            {id:4,name:'Item4'},
            {id:5,name:'Item5'},
            {id:6,name:'Item6'}
        ],
    }

    deleteItem = (id) =>{
        console.log('deleting id:'+id);
    }
render(){
    return(
        <div>
            <div>
                {this.state.items.map(item,index)=>(
                    <Quizitem key={item.id} item={item} handleDrop={(id)=>
                    this.deleteItem(id)}/>
                ))}
            </div>
            <quiz_target />
        </div>);
    }
}
export default DragDropContext(HTML5Backend)(Quiz);