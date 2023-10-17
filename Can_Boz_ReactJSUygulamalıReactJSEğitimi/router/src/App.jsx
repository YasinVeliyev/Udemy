import { Component } from "react";
import News from "./News";

import "./App.css";
import Profile from "./Profile";
import Error404 from "./Error404";

import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { loggedIn: false };
		this.auth = this.auth.bind(this);
	}

	auth() {
		this.setState((prevState) => ({
			loggedIn: !prevState.loggedIn,
		}));
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<div className="ui secondary  menu">
						<NavLink to="/" className={"item"}>
							Ana Sayfa
						</NavLink>
						<NavLink to="/iletisim" className={"item"}>
							Əlaqə
						</NavLink>
						<NavLink to="/news" className={"item"}>
							Xəbərlər
						</NavLink>
						<NavLink to="/profile" className={"item"}>
							Profile
						</NavLink>
					</div>

					<Routes>
						<Route path="/" element={<h1>Hello React</h1>} />
						<Route path="/iletisim" element={<h1>Əlaqə</h1>} />
						<Route path="/news" element={<News />} />
						<Route path="/news/:id" element={<News />} />
						<Route path="/profile" element={this.state.loggedIn ? <Profile /> : <Navigate to="/" replace />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</div>

				<input
					type="button"
					className="ui green button"
					value={this.state.loggedIn ? "Log Out" : "Login"}
					onClick={() => this.setState((prevState) => ({ loggedIn: !prevState.loggedIn }))}
				/>
			</BrowserRouter>
		);
	}
}

export default App;
