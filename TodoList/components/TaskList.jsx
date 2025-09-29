import TaskItem from "./Taskitem.jsx";
import React from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
