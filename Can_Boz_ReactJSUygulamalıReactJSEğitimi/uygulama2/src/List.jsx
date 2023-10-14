import { Component } from "react";
import PropTypes from "prop-types";

export default class List extends Component {
	constructor(props) {
		super(props);
		this.contacts = this.props.contacts;
		this.state = { filter: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
		contacts: PropTypes.array.isRequired,
	};

	handleChange(event) {
		this.setState({ filter: event.target.value.toLowerCase() });
	}

	render() {
		return (
			<div>
				<div className="ui fluid icon input">
					<input
						type="text"
						placeholder="Filter by name or phone number"
						name="filter"
						id="filter"
						value={this.state.filter}
						onChange={this.handleChange}
					/>
					<i className="circular search link icon"></i>
				</div>

				<table className="ui celled table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone Number</th>
						</tr>
					</thead>
					<tbody>
						{this.contacts
							.filter(
								(contact) => contact.name.toLowerCase().startsWith(this.state.filter) || contact.phone.startsWith(this.state.filter),
							)
							.map((contact, index) => {
								return (
									<tr key={index}>
										<td data-label="name">{contact.name}</td>
										<td data-label="phone">{contact.phone}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		);
	}
}
