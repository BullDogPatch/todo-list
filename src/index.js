import React from "react";
import ReactDOM from "react-dom";
import { todos } from "./data";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css";

console.log(todos);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  toggleItem = todoId => {
    // console.log("Got IT", todoId);
    this.setState({
      todos: this.state.todos.map(item => {
        if (todoId === item.id) {
          // console.log({ ...item });
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTodo = todoText => {
    const newTodo = {
      task: todoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="App" style={{}}>
        <h1>Todo List:</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
