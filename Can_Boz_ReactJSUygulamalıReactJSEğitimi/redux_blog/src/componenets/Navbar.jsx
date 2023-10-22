import { Component } from "react";

import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">
							<NavLink to="/">Home</NavLink>
						</a>
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
