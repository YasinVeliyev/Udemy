import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import { useState } from "react";
import Task from "./components/Task";
import Footer from "./components/Footer";

import "./App.css";

function App() {
	const [tasks, setTask] = useState([]);

	const addTask = (newTask) => {
		setTask((prevTask) => {
			return [...prevTask, newTask];
		});
	};

	const deleteTask = (id) => {
		setTask((prevTasks) => {
			return prevTasks.filter((task, index) => index !== id);
		});
	};

	return (
		<div className="App">
			<Header />
			<CreateTask addTask={addTask} />
			<div className="container overflow-scroll">
				<div className="row p-2  ">
					{tasks.map((task, index) => (
						<Task task={task} key={index} id={index} deleteTask={deleteTask} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
