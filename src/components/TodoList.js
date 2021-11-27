import React from 'react';
import TodoItem from './TodoItem';
import '../todo-list.css';

const TodoList = (props) => {
    return(
        <div className='todo-list'>

            {props.todoArray.map(item => {
                return(
                    <div>
                        <TodoItem task={item} />
                    </div>
                )
            })}

        </div>
    )
}

export default TodoList;