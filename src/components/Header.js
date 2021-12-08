import React from 'react'
import Button from './Button.js'
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from '../actions/authActions.js';

const Header = ({ onAdd, show, signOut }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1 className="heading">Expense Tracker</h1>
            {location.pathname === '/' && <Button color={show ? 'red' : '#000'} text={show ? 'close' : 'add'} onAdd={onAdd} />}
            {location.pathname === '/' && <button className="bbtn" style={{ backgroundColor: '#fff', color: '#000' }} onClick={signOut}>SignOut
            </button>}
        </header>
    )
}
const dSTP = {
    signOut,
}
export default connect(null, dSTP)(Header)
