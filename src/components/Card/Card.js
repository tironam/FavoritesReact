import React from 'react'

const Card = props => {
    return(
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card">
                Favorite Movie: {props.text}
            </div>
        </div>
    )
}

export default Card