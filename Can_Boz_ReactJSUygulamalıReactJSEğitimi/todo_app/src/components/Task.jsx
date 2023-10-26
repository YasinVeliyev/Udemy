/* eslint-disable react/prop-types */
export default function Task({ id, deleteTask, task }) {
	return (
		<div className="col-md-4 text-center p-3">
			<div className="task_content p-3">
				<h3>{task.title}</h3>
				<p>{task.content}</p>
				<button onClick={() => deleteTask(id)} className="btn btn-danger" style={{ width: "80px" }}>
					Sil
				</button>
			</div>
		</div>
	);
}
