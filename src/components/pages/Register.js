import React from 'react'
import { connect } from 'react-redux';
import { createUserWithEmailAndPassword, signInWithGoogle} from '../../actions/authActions.js';

const Register = ({ create,google , auth ,history }) => {
    
    if (!auth.isLoaded) return null
    if (!auth.isEmpty) history.push('/login')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        create(email, password);
        email = "";
         password = "";
    }
    return (
        <div className="mycontainer">
                <div className="forms-mycontainer">
                    <div className="signin-signup">
                        <form actions="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Register</h2>
                            <div className="myinput-field">
                                <input type="text" name="email" placeholder="Email" />
                            </div>
                            <div className="myinput-field">
                                <input type="password" name="password" placeholder="password" />
                            </div>
                            <input type="submit" className="bbtn solid" value="Submit" />
                            <button onClick={google} className="btn btn-secondary google">Sign-In with Google</button>
                        </form>
                    </div>
                </div>
          </div>
    )
}
const mSTP = (state) => {
    return {
        auth:state.firebase.auth
    }
}
const dispatchStateToProps = {
    create: createUserWithEmailAndPassword,
    google: signInWithGoogle
}
export default connect(mSTP,dispatchStateToProps)(Register)
