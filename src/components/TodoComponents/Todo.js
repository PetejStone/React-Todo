import React from 'react';
import TodoList from './TodoList'



const Todo = props => {
    return (
        <ul>
            {props.todoList.map(todo => <li>{todo.task}</li>)}
        </ul>
    );
}

export default Todo;