import { Component } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { PropTypes } from "prop-types";

export default class AddDepartmentModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	static propTypes = { onHide: PropTypes.func };

	handleSubmit(event) {
		event.preventDefault();
		console.log(event.target.name.value);
	}
	render() {
		return (
			<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Add Department</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Department Name</Form.Label>
								<Form.Control type="text" placeholder="Enter Department Name" name="name" required />
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
		);
	}
}
