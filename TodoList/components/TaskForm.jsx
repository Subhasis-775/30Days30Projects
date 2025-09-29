import { useState } from "react";
import React from "react";
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Enter the task"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        placeholder="Enter the description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
