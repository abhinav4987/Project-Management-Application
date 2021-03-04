import React from 'react'
import '../css/LoginForm.css'
function LoginForm() {

    const ForgotModalLoad = () => {
            var forgotBtn = document.querySelector('.forgot-btn');
            var bgModal = document.querySelector('.bg-modal');
            bgModal.classList.add('bg-active');
    }
    const ForgotModalUnload = () => {
            var forgotBtn = document.querySelector('.forgot-btn');
            var bgModal = document.querySelector('.bg-modal');
            bgModal.classList.remove('bg-active');
    }
    return (
        
        <div className="mt-5 login-form">
            <form >
                <div className="form-group mt-2">
                    <input type="text" className="form-control input-group-lg" id="formGroupExampleInput" placeholder="Username"></input>
                </div>
                <div className="form-group mt-2">
                    <input type="text" className="form-control input-group-lg" id="formGroupExampleInput" placeholder="Email"></input>
                </div>


                <button className="float-start mt-1 forgot-btn" onClick={ForgotModalLoad} type="button" ><p  className="forgot" >Forgot Password?</p></button>
                
                
                <button type="submit" className=" form-group form-control btn btn-dark mt-3">Login</button>
                <hr />
                <button className=" btn btn-danger g-button social-button form-group form-control mt-2" href="#">
                    <i className="fab fa-google-plus social-icon m-2 mt-0 mb-0" style={{ color: "Tomato" }}></i><span className="">Login with Google</span> 
                </button>
                <button className="mt-2 btn btn-primary g-button social-button form-group form-control" href="#">
                    <i className="fab fa-linkedin social-icon m-2 mt-0 mb-0" style={{ color: "TDodgerblue" }}></i><span className="">Login with Linkedin</span> 
                </button>
            </form> 
            
            <div className="bg-modal " id="bg-modal">
                
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h5 className="float-start">Forgot password</h5>
                    </div>
                    <p className="forgot-desc">
                        A verification email will be provided to reset your password.
                    </p>
                    <form className="mt-3 mb-3">
                        <div class="form-group mb-4">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" className="form-text text-muted float-start mb-2">Enter the email id provided with the account.</small>
                        </div>
                        <div className="flex-row modal-btn-grp float-end">
                            <button className="btn btn-danger m-2 " onClick={ForgotModalUnload} type="button">Close</button>
                            <button className="btn btn-success m-2 ">Verify</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        
    )
}

export default LoginForm
