import React from 'react';
import '../todo-list.css';

const TodoItem = (props) => {
    return(
        <div>
            <input type="checkbox" name={props.task} />
            <label for={props.task}>{props.task}</label>
        </div>
    )
}

export default TodoItem;