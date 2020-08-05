import React from 'react'
import './Card.css'

export default function Card(props) {

    const { titulo } = props
    const cardStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00'
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}