import { Component } from "react";
import { PropTypes } from "prop-types";
import LoaderHoc from "./LoaderHoc";

class Users extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = { users: PropTypes.array };

	render() {
		return (
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map((user, index) => (
						<tr key={index}>
							<td>{user.id}</td>
							<td data-label="Name">{user.name}</td>
							<td data-label="Username">{user.username}</td>
							<td data-label="Email">{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

// eslint-disable-next-line react-refresh/only-export-components
export default LoaderHoc(Users);
