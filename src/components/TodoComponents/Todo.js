import React from 'react';
import TodoList from './TodoList'
import './Todo.css';


const Todo = props => {
    return (
        <ul>
            {props.todoList.map(todo => <li className={props.className} onClick={props.taskComplete} checked={todo.completed} >{todo.task}</li>)}
        </ul>
    );
}

export default Todo;