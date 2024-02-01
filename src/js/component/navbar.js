import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="d-grid gap-2 d-md-flex justify-content-md-end">
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-outline-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
