import { Component } from "react";
import Child from "./Child";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { favoriteColor: "green" };
	}

	//WARNING! To be deprecated in React v17. Use componentDidMount instead.
	componentWillMount() {
		console.log("Selamla");
	}

	render() {
		return (
			<div className="App">
				<h1>My Favorite Color is {this.state.favoriteColor}</h1>
				<Child />
			</div>
		);
	}
}

export default App;
