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
        id: Date.now(),
        completed: false,
        key: Date.now()
      },
      placeholder: ''
    };
  }

  addTask = event => {
    event.preventDefault();
    if (event.target.value = null || " ")
    this.setState({
      TodoState: [...this.state.TodoState, this.state.todo],
      todo: {
        task: '',
        id: Date.now(),
        completed: false,
        key: Date.now()
      },
      placeholder: ''
    });
  }

  taskComplete = event => {
    let currentTask = this.state.TodoState.map(todo => todo.task);
    let currentIndex = currentTask.indexOf(event.target.innerText);
    currentTask = this.state.TodoState[currentIndex];
    currentTask.completed = !currentTask.completed;
    this.setState({
      ...this.state.todo,
      [currentTask]: !currentTask.completed
      
    });
    
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

  filterComplete = event => {
    event.preventDefault();
    //console.log(this.state.TodoState);
    const newList = this.state.TodoState.filter(function (task){
      if (!task.completed) {
        return true
      } else {
        return false
      }
    });
    this.setState({
      TodoState: newList,
    })
    console.log(this.state.TodoState);
    console.log(this.state.TodoState.map(todo => todo));
  }

  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo className="task" todoList={this.state.TodoState} taskComplete={this.taskComplete} ifComplete={this.ifComplete} />
        {console.log(this.state.TodoState)}
        <TodoForm onChange={this.handleChange} onSubmit={this.addTask} task={this.state.todo.task} filterComplete={this.filterComplete}/>
      </div>
    );
  }
}

export default App;
