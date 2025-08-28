import React, { useState } from "react";

//create your first component
const Home = () => {
  const [newTask, setNewTask] = useState("");

  const [chores, setChores] = useState(["homework", "wake up", "clean room"]);

  function addChore() {
    setChores([...chores, newTask]);
  }

  const students = [
    {
      name: "Sean",
      age: 25
    },
    {
      name: "Bob",
      age: 13
    }
  ]
  // const filterChores = 

  const oldStudents = students.filter(
    (studentdata)=> studentdata.name.includes("b")
  )
  console.log("oldStudents", oldStudents)

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
            addChore();
          }
        }}
      />
      <button onClick={() => addChore()}>Add task</button>
      <ul>
        {chores.map((item, index) => {
          return <li key={index + "chore"}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
