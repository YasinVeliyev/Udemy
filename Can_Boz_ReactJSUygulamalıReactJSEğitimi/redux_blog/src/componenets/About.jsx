import { Component } from "react";

export default class About extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return <div className="container">About</div>;
	}
}
