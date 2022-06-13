import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar__container">
			<ul className="navbar__link-wrapper">
				<CustomLink href="/">Home</CustomLink>
				<CustomLink href="songpage">Song Page</CustomLink>
			</ul>
		</div>
	);
};

function CustomLink({ href, children, ...props }) {
	const path = window.location.pathname;

	return (
		<li className={"navlink" + (path === href ? " active" : "")}>
			<a href={href} {...props}>
				{children}
			</a>
		</li>
	);
}

export default Navbar;
