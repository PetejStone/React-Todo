import React from 'react';

const TodoForm = props => {
    return (
    <form onSubmit={props.onSubmit}>
        <input name="task" type="text" value={props.task} placeholder="Add Task" onChange={props.onChange}/>
        <button>Add Task</button>
    </form>
    );
    
}

export default TodoForm;