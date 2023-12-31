import { Component } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { Snackbar, IconButton } from "@material-ui/core";

export default class AddDepartmentModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { snackbar: { open: false, msg: "", error: false } };
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	static propTypes = { onHide: PropTypes.func };

	handleSubmit(event) {
		event.preventDefault();
		fetch(`${import.meta.env.VITE_API_URL}departments`, {
			method: "POST",
			headers: { "Content-Type": "application/json", Accept: "application/json" },
			body: JSON.stringify({ name: event.target.department_name.value }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.status) {
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
		this.setState((prevState) => ({ snackbar: { ...prevState.snackbar, open: false, error: false } }));
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
						<Modal.Title id="contained-modal-title-vcenter">Add Department</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Department Name</Form.Label>
									<Form.Control type="text" placeholder="Enter Department Name" name="department_name" required />
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
