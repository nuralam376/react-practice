import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<ul className="menu">
				<li>
					<Link to="/countries">Countries</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
