import { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import AddDepartmentModal from "./AddDepartmentModal";

export class Department extends Component {
	constructor(props) {
		super(props);
		this.state = { departments: [], showModal: false };
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

	componentDidMount() {
		fetch("http://localhost:3000/api/departments")
			.then((data) => data.json())
			.then((departments) => {
				this.setState({ departments });
				console.log(departments);
			})
			.catch(console.error);
		// this.setDummyData();
	}

	render() {
		return (
			<div>
				<Table striped bordered hover size="sm" className="mt-4">
					<thead>
						<tr>
							<th>Department Id</th>
							<th>Department Name</th>
						</tr>
					</thead>
					<tbody>
						{this.state.departments.map((department) => {
							return (
								<tr key={department.department_id}>
									<td>{department.department_id}</td>
									<td>{department.name}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<ButtonToolbar>
					<Button onClick={() => this.setState({ showModal: true })}>Add Department</Button>
				</ButtonToolbar>
				<AddDepartmentModal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} />
			</div>
		);
	}
}
