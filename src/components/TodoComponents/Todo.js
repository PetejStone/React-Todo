import React from 'react';
import TodoList from './TodoList'
import './Todo.scss';


const Todo = props => {
    return (
        <ul>
            {props.todoList.map(todo => <li className={props.className} onClick={props.taskComplete}  >{todo.task}</li>)}
        </ul>
    );
}

export default Todo;