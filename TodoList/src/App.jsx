import { useState } from 'react';
import React from 'react';
import './App.css';
import TaskForm from '../components/TaskForm.jsx';
import TaskList from '../components/TaskList.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ title, description }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
