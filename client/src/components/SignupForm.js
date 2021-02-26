import React from 'react'
import '../css/SignupForm.css'

function SignupForm() {
    return (
        <div className="mt-5">
            <form>
                <div className="row">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="form-group mt-2">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username"></input>
                </div>
                <div className="form-group mt-2">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email"></input>
                </div>
                <button type="submit" className=" form-group form-control btn btn-success mt-4">Sign in</button>
                <hr />
                <button className=" btn btn-danger g-button social-button form-group form-control" href="#">
                    <i className="fab fa-google-plus social-icon m-2 mt-0 mb-0" style={{ color: "Tomato" }}></i><span className="">Sign up with Google</span> 
                </button>
                <button className="mt-2 btn btn-primary g-button social-button form-group form-control" href="#">
                    <i className="fab fa-linkedin social-icon m-2 mt-0 mb-0" style={{ color: "TDodgerblue" }}></i><span className="">Sign up with Linkedin</span> 
                </button>
            </form> 
            
        </div>
    )
}

export default SignupForm
