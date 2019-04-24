import React from 'react';

const todoData =  [
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
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any chang e handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
