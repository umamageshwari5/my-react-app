import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Learn React", "Build a Project"]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Using 'i' for iterator to avoid confusion with 'index' parameter
    setTasks(updatedTasks);
  };

  return (
    <div style={{ fontFamily: "cursive" }}>
      <h2 style={{ color: "green" }}>ToDoList</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ margin: "10px", backgroundColor: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a New Task"
      />

      <button
        onClick={handleAddTask}
        style={{ margin: "10px", backgroundColor: "lightgreen" }}>
        Add Task
      </button>
    </div>
  );
}

export default ToDoList;
