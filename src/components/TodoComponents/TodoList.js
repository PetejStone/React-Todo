// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
         [
            {
              task: 'Clean Room',
              id: Date.now()+1,
              completed: false,
              key: Date.now()+1
             
            },
            {
              task: 'Get Oil Change',
              id: Date.now()+2,
              completed: false,
              key: Date.now()+2
              
            },
            {
              task: 'Get a Job',
              id: Date.now()+3,
              completed: false,
              key: Date.now()+3
              
            }
          ]
    );
}

export default TodoList;