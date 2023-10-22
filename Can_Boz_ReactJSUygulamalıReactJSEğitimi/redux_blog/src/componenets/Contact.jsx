import { Component } from "react";
import { Rainbow } from "../hoc/Rainbow";

class Contact extends Component {
	render() {
		return <div className="container">Contact</div>;
	}
}

export default Rainbow(Contact);
