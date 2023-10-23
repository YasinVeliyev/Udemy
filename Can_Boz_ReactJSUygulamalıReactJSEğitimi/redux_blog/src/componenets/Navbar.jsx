import { Component } from "react";

import { NavLink } from "react-router-dom";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<NavLink to="/" className="brand-logo">
							Logo
						</NavLink>

						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<NavLink to="/">Home</NavLink>
								{/* <a href="/">Home</a> */}
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
