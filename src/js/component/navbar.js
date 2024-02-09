import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="d-grid gap-2 d-md-flex justify-content-md-end">
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-success" id="NavbarAddbutton">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
