import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import "./Nav.css";
import * as routes from '../../constants/routes.js';

const Nav = () =>
    <nav className="navbar navbar-expand-sm navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">

                <ul className="navbar-nav">
                    <li className="nav-logo">
                        <Logo></Logo>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-fade" to={routes.WELCOME}>
                            Sign-Out
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-fade" to={routes.LOGIN}>
                            Login
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-fade" to={routes.SPOT}>
                            Favorite Spots
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-fade" to={routes.CONTENT}>
                            New Spot
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link hvr-fade" to={routes.HOME}>
                            Home
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;

export default Nav;