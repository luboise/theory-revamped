import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar__container">
			<ul className="navbar__link-wrapper">
				<li className="navbar__item">
					<Link className="navlink" to="/">
						Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navlink" to="songpage">
						Song Page
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
