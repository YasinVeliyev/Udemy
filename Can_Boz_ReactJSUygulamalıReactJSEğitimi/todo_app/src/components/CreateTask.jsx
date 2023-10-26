/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CreateTask(props) {
	const [task, setTask] = useState({ title: "", content: "" });

	function handleChange(event) {
		setTask((prevTask) => ({ ...prevTask, [event.target.name]: event.target.value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.addTask(task);
		setTask({ title: "", content: "" });
	}

	return (
		<div className="create_task">
			<form className="m-5 p-4">
				<input type="text" className="form-control mb-3" name="title" placeholder="Başlık" value={task.title} onChange={handleChange} />
				<textarea
					name="content"
					id="content"
					cols="30"
					rows={5}
					placeholder="İşinizi yazın"
					className="form-control mb-3"
					value={task.content}
					onChange={handleChange}
				></textarea>
				<button className="btn btn-primary" onClick={handleSubmit}>
					Əlavə Et
				</button>
			</form>
		</div>
	);
}
