import React from 'react';
import TodoList from './TodoList'



const Todo = props => {
    return (
        <ul>
            {props.todoList.map(todo => <li onClick={props.taskComplete} checked={todo.completed} >{todo.task}</li>)}
        </ul>
    );
}

export default Todo;