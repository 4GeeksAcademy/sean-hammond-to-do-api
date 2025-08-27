import React, {useState} from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	
	const [chores, setChores] = useState(["go to sleep", "wake up", "dust"]);

	return (
		<div className="container">
		<input
			type="text"
			placeholder="Type new task here"
			onChange={(event) => {
				const newTask = event.target.value
				setInputValue(newTask)
			}}
		/>
		<button type="submit">Add task</button>
		<ul>
			{chores.map((item, index) => {
			return <li key={index + "chore"}>{item}</li>;
			})}
		</ul>
		{inputValue}
		</div>
	);
};

export default Home;
