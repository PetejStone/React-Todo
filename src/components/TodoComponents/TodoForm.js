import React from 'react';

const TodoForm = props => {
    return (
    <form onSubmit={props.onSubmit}>
        <input name="task" type="text" value={props.task} placeholder="Add Task" onChange={props.onChange}/>
        <button>Add Task</button>
        <button onClick={props.filterComplete}>Clear Completed</button>
    </form>
    );
    
}

export default TodoForm;