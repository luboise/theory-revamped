import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-links">
				<div className="navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="navbar-links_container">
					<p>
						<a href="#home">Home</a>
					</p>
					<p>
						<a href="#tech">Techniques</a>
					</p>
					<p>
						<a href="#btn3">Button 3</a>
					</p>
					<p>
						<a href="#btn4">Button 4</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
