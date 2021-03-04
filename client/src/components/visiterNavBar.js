import {React , useState, useEffect } from 'react';
import ReactNavbar from "react-responsive-animate-navbar";
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
function VisiterNavBar() {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container container-fluid">
                    <a className="navbar-brand" href="#"><h3>AMP</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end mr-auto">
                            <li className="nav-item">
                                <a  className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default VisiterNavBar
