import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const [chores, setChores] = useState(["go to sleep", "wake up", "dust"]);

  function addChore(){
	setChores([...chores, inputValue]);
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Type new task here"
        onChange={(event) => {
          const newTask = event.target.value;
          setInputValue(newTask);
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
