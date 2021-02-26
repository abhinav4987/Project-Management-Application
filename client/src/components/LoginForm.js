import React from 'react'
import '../css/LoginForm.css'
function LoginForm() {
    return (
        
        <div className="mt-5">
            <form>
                <div className="form-group mt-2">
                    <input type="text" className="form-control input-group-lg" id="formGroupExampleInput" placeholder="Username"></input>
                </div>
                <div className="form-group mt-2">
                    <input type="text" className="form-control input-group-lg" id="formGroupExampleInput" placeholder="Email"></input>
                </div>
                <a href="#" className="forgot">Forgot Password?</a>
                <button type="submit" className=" form-group form-control btn btn-success mt-3">Login</button>
                <hr />
                <button className=" btn btn-danger g-button social-button form-group form-control mt-2" href="#">
                    <i className="fab fa-google-plus social-icon m-2 mt-0 mb-0" style={{ color: "Tomato" }}></i><span className="">Login with Google</span> 
                </button>
                <button className="mt-2 btn btn-primary g-button social-button form-group form-control" href="#">
                    <i className="fab fa-linkedin social-icon m-2 mt-0 mb-0" style={{ color: "TDodgerblue" }}></i><span className="">Login with Linkedin</span> 
                </button>
            </form>    
        </div>
        
    )
}

export default LoginForm
