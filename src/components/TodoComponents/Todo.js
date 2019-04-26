import React from 'react';
import TodoList from './TodoList'
import './Todo.scss';


const Todo = props => {
    return (
        <ul>
            {props.todoList.map(todo => <li className={`task ${todo.completed ? "complete" : "not-complete"}`} onClick={props.taskComplete}  >{todo.task}</li>)}
        </ul>
    );
}

export default Todo;