import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { sigInWithEmailAndPassword,signInWithGoogle } from '../../actions/authActions.js';

const Login = ({sign,google , auth , history}) => {
   
    if (!auth.isLoaded) return null
    if (!auth.isEmpty) history.push('/')
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        sign(email, password);
    }
    return (
        <div className="mycontainer">
                <div className="forms-mycontainer">
                    <div className="signin-signup">
                        <form actions="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Login</h2>
                            <div className="myinput-field">
                                <input type="text" name="email" placeholder="Email" />
                            </div>
                            <div className="myinput-field">
                                <input type="password" name="password" placeholder="password" />
                            </div>
                            <input type="submit" className="bbtn solid" value="Submit" />
                        <button onClick={google} className="btn btn-secondary google">Sign-In with Google</button>
                            <span>don't have an Account? click <Link to="/register">here</Link> to register</span>
                        </form>
                    </div>
                </div>
          </div>
    )
}
const mSTP = (state) => {
    return {
        auth : state.firebase.auth 
    }
}
const dSTP = {
    sign: sigInWithEmailAndPassword,
    google: signInWithGoogle
}
export default connect(mSTP,dSTP)(Login)
