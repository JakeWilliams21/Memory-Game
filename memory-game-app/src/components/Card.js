import React, {useState} from "react";
import './Card.css'

const Card = (props) => {


    return (
        <div className = 'card-parent'>
            <img src = {props.player.url} alt = 'NBA player'/>
            <p>{props.player.name}</p>
        </div>
    )
}

export {Card}