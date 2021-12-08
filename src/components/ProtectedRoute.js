import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
    if (!auth.isLoaded) return null;
    if (!auth.isEmpty) {
        return (<Route {...rest} render={(props) => {
            return <Component {...props} />;
        }} />)
    }
    // if user is not logged in
    return (<Route {...rest} render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />;
    }} />)
    
};
const mSTP = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mSTP)(ProtectedRoute)
