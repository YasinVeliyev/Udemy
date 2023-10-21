import { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import AddEmployeeModal from "./AddEmployeeModal";
import EditEmployeeModal from "./EditEmployeeModal";
export class Employee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [],
			addModal: { show: false },
			editModal: { show: false, employee_id: "", name: "", email: "", department: "", doj: "" },
		};
		this.deleteEmployee = this.deleteEmployee.bind(this);
	}

	getEmployees() {
		fetch("http://localhost:3000/api/employees")
			.then((data) => data.json())
			.then((employees) => {
				this.setState({ employees });
			})
			.catch(console.error);
	}

	componentDidMount() {
		this.getEmployees();
	}

	componentDidUpdate() {
		this.getEmployees();
	}
	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(this.state) !== JSON.stringify(nextState);
	}

	deleteEmployee(employee_id) {
		if (window.confirm("Are you sure?")) {
			fetch(`${import.meta.env.VITE_API_URL}employees/${employee_id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
			})
				.then(() => this.getEmployees())
				.catch((error) => console.error(error));
		}
	}

	render() {
		return (
			<div>
				<Table striped bordered hover size="sm" className="mt-4">
					<thead>
						<tr>
							<th>Employee Id</th>
							<th>Employee Name</th>
							<th>Employee Email</th>
							<th>Employee Deparment</th>
							<th>Employee Doj</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.employees.map((employee) => {
							return (
								<tr key={employee.employee_id}>
									<td>{employee.employee_id}</td>
									<td>{employee.name}</td>
									<td>{employee.email}</td>
									<td>{employee.department}</td>
									<td>{employee.doj}</td>
									<td>
										<div className="d-flex justify-content-center">
											<Button
												variant="info"
												className="mx-3"
												onClick={() =>
													this.setState({
														editModal: {
															show: true,
															...employee,
														},
													})
												}
											>
												Edit
											</Button>
											<Button
												variant="danger"
												onClick={() => {
													this.deleteEmployee(employee.employee_id);
												}}
											>
												Delete
											</Button>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<ButtonToolbar>
					<Button onClick={() => this.setState({ addModal: { show: true } })}>Add Employee</Button>
				</ButtonToolbar>
				<AddEmployeeModal show={this.state.addModal.show} onHide={() => this.setState({ addModal: { show: false } })} />

				<EditEmployeeModal
					show={this.state.editModal.show}
					onHide={() => this.setState((prevState) => ({ editModal: { ...prevState.editModal, show: false } }))}
					name={this.state.editModal.name}
					id={this.state.editModal.employee_id}
					department={this.state.editModal.department}
					email={this.state.editModal.email}
					doj={this.state.editModal.doj}
				/>
			</div>
		);
	}
}
