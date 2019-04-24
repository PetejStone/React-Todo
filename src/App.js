import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import { underline } from 'ansi-colors';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any chang e handlers you need to work with your state
  constructor(props) {
    super();
    this.state = {
      TodoState: TodoList(),
      todo: {
        task: '',
        id: '',
        completed: 'false'
      },
      placeholder: ''
    };
  }

  addTask = event => {
    event.preventDefault();
    this.setState({
      TodoState: [...this.state.TodoState, this.state.todo],
      todo: {
        task: '',
        id: '',
        completed: 'false'
      },
      placeholder: 'fff'
    });
  }

  taskComplete = event => {
    //console.log(event.target.value);
    console.log(Boolean(event.target.getAttribute('completed')));
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo todoList={this.state.TodoState} taskComplete={this.taskComplete} />
        {console.log(this.state.TodoState)}
        <TodoForm onChange={this.handleChange} onSubmit={this.addTask} task={this.state.todo.task} />
      </div>
    );
  }
}

export default App;
