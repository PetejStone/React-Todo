import React from 'react';

const TodoForm = props => {
    return (
    <form onSubmit={props.onSubmit}>
        <input type="text" placeholder="add task" onChange={props.onChange}/>
        <button>Add Task</button>
    </form>
    );
    
}

export default TodoForm;