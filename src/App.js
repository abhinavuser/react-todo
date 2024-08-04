import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem'
import './App.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoItems:[
                {title:"Item 1", desc:"item 1 Description", completed:true},
                {title:"Item 2", completed:false},
                {title:"Item 3", desc:"item 2 Description", completed:false}
            ]
        }
    };
    toggleCompleted(index){
        let todoItems= this.state.todoItems.slice();
        todoItems[index].completed=!todoItems[index].completed;
        this.setState({todoItems})
    }
    render(){
        let items = this.state.todoItems.map((item,index) => (
            <TodoItem 
                title={item.title}
                desc={item.desc}
                completed={item.completed}
                onToggle={() =>this.toggleCompleted(index)}
             />
        ));
        return (
        <div className="container"> 
            <div className="mt-2 mb-5">Todo creation</div>
            <div>
                {items}
            </div>
        </div>
        );
    }
}