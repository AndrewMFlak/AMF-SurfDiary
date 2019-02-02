import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
import * as routes from '../../constants/routes.js';

const Nav = () =>
    <nav className="navbar navbar-inverse navbar-top">
        <div className="container-fluid">
            <button type="button" className="collapsed navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/><span className="icon-bar"/>
                <span className="icon-bar"/>
            </button>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link hvr-fade" to={routes.CONTENT}>
                    Content
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hvr-fade" to={routes.SOMETHING}>
                    Something
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

export default Nav