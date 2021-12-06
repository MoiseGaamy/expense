import React from 'react'
import Button from './Button.js'
import { useLocation } from 'react-router-dom';

const Header = ({ onAdd, show }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1 className="heading">Expense Tracker</h1>
            { location.pathname==='/' && <Button color={show ? 'red' : '#000'} text={show ? 'close' : 'add'} onAdd={onAdd} />}
        </header>
    )
}

export default Header
