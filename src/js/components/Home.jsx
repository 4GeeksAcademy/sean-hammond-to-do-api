import React, { useState } from "react";

//to do list web application
const Home = () => {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState(["homework", "Dust", "clean room"]);

  function addTask() {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = () => {
    const filteredTasks = tasks.filter((taskData) => taskData != "wake up");
    console.log("Dust:", filteredTasks);


  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Type new task here"
        onChange={(event) => {
          const typedTask = event.target.value;
          setNewTask(typedTask);
        }}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            addTask();
          }
        }}
      />
      <button onClick={() => addTask()}>Add task</button>
      <ul>
        {tasks.map((item, index) => {
          return <li key={index + "task"}>{item}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          deleteTask();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Home;
