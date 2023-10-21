import { Component } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { Snackbar, IconButton } from "@material-ui/core";

export default class AddEmployeeModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { snackbar: { open: false, msg: "", error: false }, departments: [] };
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	static propTypes = { onHide: PropTypes.func };

	componentDidMount() {
		fetch("http://localhost:3000/api/departments")
			.then((data) => data.json())
			.then((departments) => {
				this.setState({ departments });
			})
			.catch(console.error);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(this.state, nextState, JSON.stringify(this.state) === JSON.stringify(nextState));
	// 	return JSON.stringify(this.state) !== JSON.stringify(nextState);
	// }

	handleSubmit(event) {
		event.preventDefault();
		fetch(`${import.meta.env.VITE_API_URL}employees`, {
			method: "POST",
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
				console.log(data);
				if (data.status === "success") {
					this.setState({ snackbar: { open: true, msg: data.status } });
					this.props.onHide();
				} else {
					throw data;
				}
			})
			.catch((error) => {
				this.setState(() => ({ snackbar: { open: true, msg: error.msg, error: true } }));
			});
	}

	closeSnackbar() {
		this.setState((prevState) => ({ snackbar: { ...prevState.snackbar, open: true, error: false } }));
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
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Enter  Name" name="employee_name" required />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="Enter  Email" name="employee_email" required />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Department</Form.Label>
									<Form.Control as="select" name="employee_department">
										{this.state.departments.map((department) => {
											return <option key={department.department_id}>{department.name}</option>;
										})}
									</Form.Control>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>DOJ</Form.Label>
									<Form.Control type="date" placeholder="Enter DOJ" name="employee_doj" required />
								</Form.Group>
								<Button variant="primary" type="submit">
									Add
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
