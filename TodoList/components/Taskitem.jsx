import React from "react";
const Taskitem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li style={{ margin: "10px 0", textAlign: "left" }}>
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
          textAlign: "left",
        }}
      >
        {task.title}
      </span>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
};

export default Taskitem;
