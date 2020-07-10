import React from "react";
import Header from "./components/header";
import Task from "./components/task";
import "./App.css";

const storeTasksKey = "@my-app-tasks"; // the key used to store our data
const deletedKey = "@my-app-deletedTasks"; // the key used to store our data

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      newTask: ""
    };
  }

  getTask = e => {
    // get the task name being entered.
    // console.log(e.target.value);

    const newTask = e.target.value;

    this.setState({ newTask });
    // same as: this.setState({newTask: newTask})
  };

  addTask = () => {
    const { newTask } = this.state;

    const { tasks } = this.state;

    if (newTask.trim().length > 0) {
      // if the new task is not empty, add it
      tasks.unshift({ name: newTask });

      this.setState({
        tasks
      });
      localStorage.setItem(storeTasksKey, JSON.stringify(tasks));
    }
  };

  

  removeTask = taskIndex => {
    console.log("pressed #" + taskIndex);
    let { tasks } = this.state;

    // to delete we are going to filter and return a new array of tasks
    tasks = tasks.filter((task, index) => index !== taskIndex);

    this.setState({ tasks });
    localStorage.setItem(deletedKey, JSON.stringify(tasks));
  };

  componentDidMount() {
    let tasks;

    tasks = localStorage.getItem(storeTasksKey);

    tasks = JSON.parse(tasks);

    if (tasks) {
      // check if tasks is not null
      this.setState({ tasks });
    }
  }
  componentDidMount() {
    let tasks;

    tasks = localStorage.getItem(deletedKey);
    
    tasks = JSON.parse(tasks);

    if (tasks) {
      // check if tasks is not null
      this.setState({ tasks });
    }
  }

  render() {
    return (
      <div>
        {/* header Component, with input */}
        <Header onTypeTask={this.getTask} onAddTask={this.addTask} />

        {/* list of tasks Component => task Component */}
        <div className="task-list">
          {this.state.tasks.map((task, index) => (
            <Task
              name={task.name}
              key={index}
              taskIndex={index}
              deleteTask={this.removeTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;