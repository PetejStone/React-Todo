import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any chang e handlers you need to work with your state
  constructor(props) {
    super();
    this.state = {
      todoProp: props.TodoList,
      todo: {
        task: '',
        id: '',
        completed: ''
      }
    };
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      todoProp: [...this.state.todoData, this.state.todo],
      todo: {
        task: '',
        id: '',
        completed: ''
      }
    });
  }

  handleChange = event => {
    this.setState({

    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
