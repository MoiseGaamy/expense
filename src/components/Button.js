import React from 'react'

const Button = ({color , text , onAdd}) => {
    return (
        <button className="bt" style={{backgroundColor: color}} onClick={onAdd}>
            {text}
        </button>
    )
}

export default Button
