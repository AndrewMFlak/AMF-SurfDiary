import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import "./Nav.css";
import * as routes from '../../constants/routes.js';

const Nav = () =>
    <nav className="navbar navbar-inverse navbar-top">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-logo">
                    <Logo></Logo>
                </li>            
                <li className="nav-item">
                    <Link className="nav-link hvr-fade" to={routes.HOME}>
                        Sign-Out
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hvr-fade" to={routes.HOME}>
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hvr-fade" to={routes.SOMETHING}>
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
    </nav>;

export default Nav;