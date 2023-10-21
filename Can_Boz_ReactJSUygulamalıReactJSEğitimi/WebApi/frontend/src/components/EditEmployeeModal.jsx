import { Component } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { Snackbar, IconButton } from "@material-ui/core";

export default class EditEmployeeModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { snackbar: { open: false, msg: "", error: false }, departments: [] };
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	static propTypes = {
		onHide: PropTypes.func,
		id: PropTypes.number,
		name: PropTypes.string,
		doj: PropTypes.string,
		email: PropTypes.string,
		department: PropTypes.string,
	};
	componentDidMount() {
		fetch("http://localhost:3000/api/departments")
			.then((data) => data.json())
			.then((departments) => {
				this.setState({ departments });
			})
			.catch(console.error);
	}

	closeSnackbar() {
		this.setState((prevState) => ({ snackbar: { ...prevState.snackbar, open: false, error: false } }));
	}
	handleSubmit(event) {
		event.preventDefault();

		fetch(`${import.meta.env.VITE_API_URL}employees/${this.props.id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json", Accept: "application/json" },
			body: JSON.stringify({
				name: event.target.employee_name.value,
				email: event.target.employee_email.value,
				department: event.target.employee_department.value,
				doj: event.target.employee_doj.value,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					this.setState({ snackbar: { open: true, msg: data.msg } });
				} else {
					throw data;
				}
			})
			.catch((error) => {
				this.setState(() => ({ snackbar: { open: true, msg: error.msg, error: true } }));
			});
	}

	render() {
		return (
			<Container>
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
					open={this.state.snackbar.open}
					autoHideDuration={1000}
					onClose={this.closeSnackbar}
					message={
						<span id="snackbar_id" className={`alert ${this.state.snackbar.error ? "alert-danger" : "alert-success"}`}>
							{this.state.snackbar.msg}
						</span>
					}
					action={[
						<IconButton key="close" aria-label="Close" color="inherit" onClick={this.closeSnackbar}>
							x
						</IconButton>,
					]}
				></Snackbar>
				<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Add Employee</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Id</Form.Label>
									<Form.Control type="text" disabled name="employee_id" required defaultValue={this.props.id} />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter  Name"
										name="employee_name"
										required
										defaultValue={this.props.name}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter  Email"
										name="employee_email"
										required
										defaultValue={this.props.email}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Department</Form.Label>
									<Form.Control as="select" name="employee_department" defaultValue={this.props.department}>
										{this.state.departments.map((department) => {
											return <option key={department.department_id}>{department.name}</option>;
										})}
									</Form.Control>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>DOJ</Form.Label>
									<Form.Control
										type="date"
										placeholder="Enter DOJ"
										name="employee_doj"
										required
										defaultValue={this.props.doj.substr(0, 10)}
									/>
								</Form.Group>
								<Button variant="primary" type="submit">
									Save
								</Button>
							</Form>
						</Container>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.onHide} variant="danger">
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		);
	}
}
