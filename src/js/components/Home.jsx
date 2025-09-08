import React, { useState, useEffect } from "react";

// TO DO LIST WEB APPLICATION. Comments added for self-learning.
const Home = () => {
  useEffect(
    // Whatever is in the arrow function is what going to happen when the page loads.
    () => {
      fetch("https://playground.4geeks.com/todo/users") // URL for get/post/etc. request goes here
        // Initial response to the fetch. If it goes good, it goes to the next .then. NOTE: You can leave this blank for GET requests.
        .then(
          // The response goes here
          (resp) => {console.log("response:", resp);}
        )

        // Final result of the request
        .then(
          (data)=> {console.log("data:", resp);}
        );
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
      <h2>Developer notes:</h2>
      <p>
        <strong>Duplicate tasks will not usually be cleared</strong> when one
        copy is cleared. My workaround was to add a unique number of spaces to
        each task (which the browser visually omits*).
      </p>
      <p>
        The reason I did this is in case someone intends to complete the same
        task multiple times. For example, you might type:
      </p>
      <ul>
        <li>Do some work</li>
        <li>Take a break</li>
        <li>Do some work</li>
        <li>Take a break</li>
      </ul>
      <p>
        Without the workaround, when you clear one task, the duplicate is also
        cleared, making it frustrating if you expected it to only clear one.{" "}
      </p>
      <p>
        <strong>It might clear duplicates if</strong> someone types accidental
        spaces at the end of a task, but this is unlikely in practice. It also
        might clear duplicates with the right combination of adds and clears.
      </p>
      <p>
        Alternatively, I could have added a number to each task, but this would
        be more complicated to code since the numbers would have to change each
        time a task is cleared, or otherwise be hidden, which requires more
        code.
      </p>
      <small>*Only one space is shown.</small>
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
