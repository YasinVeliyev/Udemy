import { Component } from "react";
import { Button, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";

import { Home } from "./components/Home";
import { Employee } from "./components/Employee";
import { Department } from "./components/Department";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<BrowserRouter>
					<h3 className="m-3 d-flex justify-content-center">React js with Bootstrap</h3>
					<h5 className="m-3 d-flex justify-content-center"> Employee Managment Portal</h5>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/employee" element={<Employee />} />
						<Route path="/department" element={<Department />} />
					</Routes>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
