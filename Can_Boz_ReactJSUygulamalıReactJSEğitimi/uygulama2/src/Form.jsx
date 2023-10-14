import { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
	static propTypes = { addContact: PropTypes.func.isRequired };

	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			phone: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addContact({ name: `${this.state.first_name} ${this.state.last_name}`, phone: this.state.phone });
		this.setState({
			first_name: "",
			last_name: "",
			phone: "",
		});
	}

	render() {
		return (
			<div style={{ marginTop: "10px" }}>
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
						<label>First Name</label>
						<input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange} />
					</div>
					<div className="field">
						<label>Last Name</label>
						<input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange} />
					</div>
					<div className="field">
						<label>Phone Number</label>
						<input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} />
					</div>

					<button className="ui green fluid button" type="submit">
						Add
					</button>
				</form>
			</div>
		);
	}
}
