import {React , useState, useEffect } from 'react';
import ReactNavbar from "react-responsive-animate-navbar";
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
function VisiterNavBar() {
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container container-fluid">
                    <a class="navbar-brand" href="#"><h3>AMP</h3></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 mb-lg-0 justify-content-end mr-auto">
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
