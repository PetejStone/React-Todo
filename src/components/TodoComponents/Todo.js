import React from 'react';
import TodoList from './TodoList'



const Todo = props => {
    return (
        <ul>
            {props.todoList.map(todo => <li onClick={props.taskComplete} completed={todo.completed} name="hello">{todo.task}</li>)}
        </ul>
    );
}

export default Todo;