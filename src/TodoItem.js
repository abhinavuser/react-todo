import React from 'react';
import ReactDOM from 'react-dom';

export default function TodoItem({title,desc,completed,onToggle}){
    let descText = (!desc)? 'Default' : desc;
    let Status = (completed)? 'Completed' : 'Not Completed';
    let buttonClass = `btn btn-${(completed)? 'success' : 'danger'}`;

    return (
        <div className="todo-item p-3 mb-5 d-flex justify-content-between rounded">
            <div>
                <h5>{title}</h5>
                <p>{descText}</p>
            </div>
            <button 
                className={buttonClass}
                onClick={() => onToggle()}
            >{Status}</button>

        </div>
    );
}
