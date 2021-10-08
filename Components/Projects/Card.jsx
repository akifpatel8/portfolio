import React from 'react'
import Styles from './Card.module.css'

function Card({img, title, description, github, blog}) {
    return (
        <div className={Styles.Card}>
            <div className={Styles.Card__img}>
                <img src={img} alt='project img'/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
