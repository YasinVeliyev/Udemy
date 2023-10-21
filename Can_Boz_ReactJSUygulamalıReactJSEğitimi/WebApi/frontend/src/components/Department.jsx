import { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import AddDepartmentModal from "./AddDepartmentModal";
import EditDepartmentModal from "./EditDepartmentModal";

export class Department extends Component {
	constructor(props) {
		super(props);
		this.state = {
			departments: [],
			showAddModal: false,
			edit: { showEditModal: false, department_id: "", department_name: "" },
		};
		this.deleteDepartment = this.deleteDepartment.bind(this);
	}

	setDummyData() {
		this.setState({
			departments: [
				{ department_id: 1, name: "Development" },
				{ department_id: 2, name: "Quality Assurance (QA)" },
				{ department_id: 3, name: "Product Management" },
				{ department_id: 4, name: "Sales and Marketing" },
				{ department_id: 5, name: "Human Resources" },
				{ department_id: 6, name: "Finance and Administration" },
				{ department_id: 7, name: "Executive Leadership" },
				{ department_id: 8, name: "Middle Management" },
			],
		});
	}

	getDeparments() {
		fetch("http://localhost:3000/api/departments")
			.then((data) => data.json())
			.then((departments) => {
				this.setState({ departments });
			})
			.catch(console.error);
	}

	componentDidMount() {
		this.getDeparments();
	}

	componentDidUpdate() {
		this.getDeparments();
	}
	shouldComponentUpdate(nextProps, nextState) {
		return JSON.stringify(this.state) !== JSON.stringify(nextState);
	}

	deleteDepartment(department_id) {
		if (window.confirm("Are you sure?")) {
			fetch(`${import.meta.env.VITE_API_URL}departments/${department_id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
			})
				.then(() => this.getDeparments())

				.catch((error) => console.error(error));
		}
	}

	render() {
		return (
			<div>
				<Table striped bordered hover size="sm" className="mt-4">
					<thead>
						<tr>
							<th>Department Id</th>
							<th>Department Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.departments.map((department) => {
							return (
								<tr key={department.department_id}>
									<td>{department.department_id}</td>
									<td>{department.name}</td>
									<td>
										<div className="d-flex justify-content-center">
											<Button
												variant="info"
												className="mx-3"
												onClick={() =>
													this.setState({
														edit: {
															showEditModal: true,
															department_id: department.department_id,
															department_name: department.name,
														},
													})
												}
											>
												Edit
											</Button>
											<Button
												variant="danger"
												onClick={() => {
													this.deleteDepartment(department.department_id);
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
					<Button onClick={() => this.setState({ showAddModal: true })}>Add Department</Button>
				</ButtonToolbar>
				<AddDepartmentModal show={this.state.showAddModal} onHide={() => this.setState({ showAddModal: false })} />
				<EditDepartmentModal
					show={this.state.edit.showEditModal}
					onHide={() => this.setState((prevState) => ({ edit: { ...prevState.edit, showEditModal: false } }))}
					department_name={this.state.edit.department_name}
					department_id={this.state.edit.department_id}
				/>
			</div>
		);
	}
}
