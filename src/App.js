import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="mt-4 text-align-center">Quản Lý Công Việc</h2>
        <hr/>

        <TaskForm />
      </div>
    );
  }
}

export default App;
