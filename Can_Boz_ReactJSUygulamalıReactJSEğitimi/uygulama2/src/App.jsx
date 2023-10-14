import { Component } from "react";

import "./App.css";
import Contacts from "./Contacts";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{
					phone: "994 70 747-37-66",
					name: "Aiko Frank",
				},
				{
					phone: "994 50 262-03-31",
					name: "Stuart Fowler",
				},
				{
					phone: "994 50 447-12-67",
					name: "Linus Maddox",
				},
				{
					phone: "994 55 689-77-45",
					name: "Hammett Cummings",
				},
				{
					phone: "994 77 575-50-23",
					name: "Wing Sampson",
				},
			],
		};
		this.addContact = this.addContact.bind(this);
	}

	addContact(contact) {
		let { contacts } = this.state;
		contacts.push(contact);
		this.setState({ contacts });
	}

	render() {
		return (
			<>
				<Contacts contacts={this.state.contacts} addContact={this.addContact} />
			</>
		);
	}
}

export default App;
