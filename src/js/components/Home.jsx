import React, { useState } from "react";

// TO DO LIST WEB APPLICATION
const Home = () => {
  // New task is empty string until user types and submits it to the tasks array
  const [newTask, setNewTask] = useState("");

  // The array of tasks
  const [tasks, setTasks] = useState([
    // "This is a demo task", // Default task can be set here
  ]);

  // Adds the user's typed task to the array of tasks
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  }

  // Delete a specific task
  const deleteTask = (taskToDelete) => {
    const filteredTasks = tasks.filter((taskData) => taskData != taskToDelete);
    console.log("Dust:", filteredTasks);
    setTasks(filteredTasks);
  };

  // User can input text in a field and click button or press enter to add typed task to tasks array
  return (
    <div className="container">
      <input
        value={newTask}
        type="text"
        placeholder="Type new task here"
        onChange={
          // Whatever is typed becomes newTask
          (event) => {
            const typedTask = event.target.value;
            setNewTask(typedTask);
          }
        }
        onKeyDown={(event) => {
          // Add typed task to list if enter key pressed
          if (event.key == "Enter") {
            addTask();
          }
        }}
      />
      <button
        onClick={
          // Add typed task to list if add button clicked
          () => addTask()
        }
      >
        Add task
      </button>
      <ul>
        {
          // Print each task as a li
          tasks.map((item, index) => {
            return (
              <li key={index + "task"}>
                {item}
                <button
                  onClick={() => {
                    // Delete a selected task
                    deleteTask(item);
                  }}
                >
                  X
                </button>
              </li>
            );
          })
        }
        {
          // Message if there are no tasks
          tasks.length == 0 && <li>All clear for the day!</li>
        }
        {
          // Button to clear all tasks appears unless there are no tasks
          tasks.length > 0 && (
            <button
              onClick={() => {
                // Delete all tasks by clearing tasks array
                setTasks([]);
              }}
            >
              Clear all tasks
            </button>
          )
        }
      </ul>
    </div>
  );
};

export default Home;
