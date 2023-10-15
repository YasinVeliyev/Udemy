import { Component } from "react";
import Users from "./Users";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { users: [], isLoading: true };
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((data) => data.json())
			.then((users) => {
				setTimeout(() => this.setState({ users, isLoading: false }), 1000);
			});
	}

	render() {
		return (
			<div className="App">
				<h1>Users</h1>
				<Users users={this.state.users} />
			</div>
		);
	}
}

export default App;
