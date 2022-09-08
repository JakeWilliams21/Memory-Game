import React, {useState} from "react";
import './Card.css'

const Card = (props) => {

    const handleClick = (e) => {
        props.click(props.player.id)
    }

    return (
        <div className = 'card-parent' onClick = {handleClick}>
        {!props.player.url ? 
        <div>loading...</div> :
        <img src = {props.player.url} alt = 'NBA player'/>
        } 
            <p>{props.player.name}</p>
        </div>
    )
}

export {Card}