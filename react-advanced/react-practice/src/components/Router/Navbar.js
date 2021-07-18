import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{ fontWeight: 'bold', color: 'red', textDecoration: 'none' }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/about"
                        activeStyle={{ fontWeight: 'bold', color: 'red', textDecoration: 'none' }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/services"
                        activeStyle={{ fontWeight: 'bold', color: 'red', textDecoration: 'none' }}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/posts/id"
                        activeStyle={{ fontWeight: 'bold', color: 'red', textDecoration: 'none' }}
                    >
                        Posts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
