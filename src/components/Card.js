import React from 'react'
import './Card.css'

function Card({title, imgURL, body}){
    return(
        <div className='card-container'> 
            <div className='image-container'>
                <img src={imgURL} alt ='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
                <div className="btn">
                    <button> Talk to seller </button>
                </div>
            </div>
        </div>
    )
}

export default Card;