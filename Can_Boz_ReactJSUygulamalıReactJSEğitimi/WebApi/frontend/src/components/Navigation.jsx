// import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export const Navigation = () => {
	return (
		<nav>
			<Navbar bg="dark" data-bs-theme="dark" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink to="/" className="d-inline p-2 bg-dark text-white link">
							Home
						</NavLink>
						<NavLink to="/employee" className="d-inline p-2 bg-dark text-white">
							Employee
						</NavLink>
						<NavLink to="/department" className="d-inline p-2 bg-dark text-white">
							Department
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</nav>
	);
};
