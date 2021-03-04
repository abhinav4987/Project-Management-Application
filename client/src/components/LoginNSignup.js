import React from 'react';
import VisiterNavBar from './VisiterNavBar';
import '../css/LoginNSignup.css'
import { requirePropFactory } from '@material-ui/core';
import TeamWork from '../images/teamwork.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'
function LoginNSignup() {
    return (
        <div>
            <VisiterNavBar />
            <div className="main-body flex">
                
                <div className="artNmessage halves">
                    <img className="teamwork-icon bounce-2" src={TeamWork} />
                    <h1 className="teamwork-title">Project Management Appliaction</h1>
                    <p className="teamwork-desc">A digital platform where you can collaborate and organise your projects.</p>
                </div>

                <div className="formSection halves">
                    <div className="tabularView">
                        <ul class="nav nav-tabs mb-3 tab-options" id="myTab" role="tablpanel">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="true">Sign Up</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="false">Login</button>
                            </li>
                        </ul>

                        <div class="tab-content tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="signup" role="tabpanel" aria-labelledby="home-tab">
                                <SignupForm />
                            </div>
                            <div class="tab-pane fade show" id="login" role="tabpanel" aria-labelledby="profile-tab">
                                <LoginForm />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginNSignup;