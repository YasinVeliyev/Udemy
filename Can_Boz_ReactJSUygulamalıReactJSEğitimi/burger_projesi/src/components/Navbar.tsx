import React from "react";
import BurgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
	return (
		<div className="navbar">
			<nav className="main">
				<img src={BurgerLogo} alt="Burger Logo" />
				<div className="mainLink">
					<Link to="/">Ana Sayfa</Link>
					<Link to="/menu">Menu</Link>
					<Link to="/about">Haqqımızda</Link>
					<Link to="/contact">Əlaqə</Link>
				</div>
			</nav>
		</div>
	);
};
