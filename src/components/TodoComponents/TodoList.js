// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
         [
            {
              task: 'Clean Room',
              id: Date.now(),
              completed: false
            },
            {
              task: 'Get Oil Change',
              id: Date.now(),
              completed: false
            },
            {
              task: 'Get a Job',
              id: Date.now(),
              completed: false
            }
          ]
    );
}

export default TodoList;