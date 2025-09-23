import React, { useState, useEffect } from "react";

const url = "https://playground.4geeks.com/todo";

const createUser = () => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      body: JSON.stringify({
        name: "sean-hammond",
        id: 0,
      }),
    },
  };
  fetch(url + "/users/sean-hammond", options)
    .then((r) => r.json())
    .then((d) => console.log("created user data:", d));
};

const getAllUsers = () => {
  fetch(url + "/users") // URL for get/post/etc. request goes here
    // Initial response to the fetch. If it goes good, it goes to the next .then. NOTE: You can leave this blank for GET requests.
    .then(
      // The response goes here
      (resp) => {
        console.log("response:", resp);
        return resp.json();
      }
    )
    // Final result of the request
    .then((data) => {
      console.log("data (users):", resp);
    });
};

const getTasks = () => {
  fetch(url + "/users/sean-hammond")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log("data (to dos): ", data);
    });
};

// TO DO LIST WEB APPLICATION. Comments added for self-learning.
const Home = () => {
  const addTaskWithAPI = () => {
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        {
          "label": "Clean the house",
          "is_done": false
        }
      }),
    };
  };

  useEffect(
    // Whatever is in the arrow function is what going to happen when the page loads.
    () => {
      getTasks();
      createUser();
    },
    []
  );

  // New task is empty string until user types and submits it to the tasks array
  const [newTask, setNewTask] = useState("");

  // The array of tasks
  const [tasks, setTasks] = useState([
    // "This is a demo task", // Default task can be set here
  ]);

  // Adds the user's typed task to the array of tasks
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask + " ".repeat(tasks.length)]); // Each task has unique number of spaces. Clever way I came up with to ensure duplicates are not deleted.
    }
    setNewTask("");
  }

  // Delete a specific task
  const deleteTask = (taskToDelete) => {
    const filteredTasks = tasks.filter((taskData) => taskData != taskToDelete);
    setTasks(filteredTasks);
  };

  // User can input text in a field and click button or press enter to add typed task to tasks array
  return (
    <div className="container">
      <h1>API Task List</h1>
      <p>Tasks WILL BE SAVED when the page is closed/reloaded.</p>
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
          tasks.length == 0 && <li className="text-success">All clear!</li>
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
              Clear {tasks.length} task{tasks.length > 1 && "s"}
            </button>
          )
        }
      </ul>
      <footer>
        <p>
          <strong>Created by Sean Hammond</strong>
        </p>
        <p>Mentors: Alex Ayala and Thomas Brito</p>
        <p>
          This and many other projects are built by students as part of the
          4Geeks Academy Coding Bootcamp by Alejandro Sanchez and many other
          contributors.
        </p>
      </footer>
    </div>
  );
};

export default Home;

// Integrity statement: I added my own comments/code and did not rely on copy-and-paste from a.i.
