import React, {useState} from "react";
import './Navbar.css'

const Navbar = (props) => {
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)


    return (
        <div className = 'navbar-parent'>
            <div className = 'navbar-left'>
                <h1>NBA Memory Game</h1>
                <p>Get points by clicking on an image, but don't click on any more than once!</p>
            </div>
            <div className = 'navbar-right'>
                <h2>Score: {props.score.current}</h2>
                <h2>Best Score: {props.score.best}</h2>
            </div>
        </div>
    )
}

export {Navbar}